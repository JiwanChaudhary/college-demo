import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Venue from "@/models/venueSpace";
import Package from "@/models/package";
import Event from "@/models/eventBooking";
import dayjs from "dayjs";

let createEventBooking: any;

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const {
      formattedFromDateTime,
      formattedToDateTime,
      eventDetails,
      eventType,
      choosePackage,
      venueName,
    } = await request.json();

    // return error if date selected is not valid
    if (!formattedFromDateTime || !formattedToDateTime) {
      return NextResponse.json(
        {
          message: "Invalid Date, Please select valid date",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    if (!eventType || !choosePackage || !venueName) {
      return NextResponse.json(
        {
          message: "Please fill all the details",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const { guests, message } = eventDetails;

    if (!guests) {
      return NextResponse.json(
        {
          message: "Number of guests is required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // calculate total number of days for event
    const startDate = dayjs(formattedFromDateTime).format(
      "YYYY-MM-DD, hh:mm a"
    );
    const endDate = dayjs(formattedToDateTime).format("YYYY-MM-DD, hh:mm a");
    // console.log(startDate, endDate);

    const startDateObject = dayjs(startDate);
    const endDateObject = dayjs(endDate);
    const totalDays = endDateObject.diff(startDateObject, "day") + 1;

    // find user that  books the event
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodeToken.id;
    // console.log(userId);

    //  find venueId from venueName
    let encodedString = venueName;
    let decodedString = decodeURIComponent(encodedString);
    // console.log(decodedString);

    const venue = await Venue.findOne({ venueName: decodedString });
    const rentalFee = venue.rentalFee;

    const venueId = venue._id; //get venueId
    // console.log(venueId);

    // find packageId from choosePackage and venueId
    const findPackage = await Package.findOne({ name: choosePackage, venueId });
    console.log(findPackage.name);

    const basePriceForPackage = findPackage.basePrice;
    console.log(basePriceForPackage);

    const numberOfPeopleForBasePrice = findPackage.numberOfPeopleForBasePrice;
    const capacityForPackage = findPackage.capacity;
    const additionalPricePerPerson = findPackage.additionalPricePerPerson;
    const guestsForEvent = guests;

    // calculate total amount for event
    let totalAmount = 0;
    if (guestsForEvent > capacityForPackage) {
      return NextResponse.json(
        {
          message: "Guests cannot be more than capacity of the package",
          success: false,
        },
        {
          status: 400,
        }
      );
    } else if (guestsForEvent === numberOfPeopleForBasePrice) {
      totalAmount = rentalFee * totalDays + basePriceForPackage * totalDays;
    } else if (guestsForEvent > numberOfPeopleForBasePrice) {
      totalAmount =
        rentalFee * totalDays +
        basePriceForPackage * totalDays +
        (guestsForEvent - numberOfPeopleForBasePrice) *
          additionalPricePerPerson *
          totalDays;
    }
    console.log(totalAmount);

    const packageId = findPackage._id; // get packageId
    console.log(packageId);

    // create event booking
    const BookEvent = await Event.create({
      userId,
      venueId,
      packageId,
      eventType,
      eventFromDate: startDateObject,
      eventToDate: endDateObject,
      totalAttendees: guests,
      totalAmount,
      status: "active",
      message,
    });

    createEventBooking = BookEvent;

    if (BookEvent) {
      return NextResponse.json(
        {
          message: "Event booked successfully",
          success: true,
          BookEvent,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Package cannot be created now, try again later",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}

// console.log(createEventBooking);

// get total amount for event
export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // console.log(createEventBooking._id);

    // get token from cookies
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodeToken.id;

    // find event on the basis of userId
    const event = await Event.findOne({ userId, _id: createEventBooking._id })
      .populate("packageId")
      .populate("venueId");
    console.log(event);

    if (event) {
      return NextResponse.json(
        {
          message: "Event found",
          success: true,
          event,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Event not found",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Event Not found",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
