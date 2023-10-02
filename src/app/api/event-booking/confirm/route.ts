import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Venue from "@/models/venueSpace";
import User from "@/models/userSchema";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const {
      formattedFromDateTime,
      formattedToDateTime,
      eventDetails,
      eventType,
      choosePackage,
      totalAmount,
      decodedString,
    } = await request.json();

    const { guests, message } = eventDetails;

    // find user that  books the event
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodeToken.id;
    // console.log(userId);

    // const user = await User.findOne({ _id: userId });
    // user.currentBookings.push({
    //   venueName: decodedString,
    //   eventType,
    //   choosePackage,
    //   totalAmount,
    //   guests,
    //   message,
    //   formattedFromDateTime,
    //   formattedToDateTime,
    // });

    // venue name
    const venueName = decodedString;
    console.log(venueName);

    // find venue from venueName
    const venue = await Venue.findOne({ venueName });
    console.log(venue);
    venue.currentBookings.push({
      userId,
      eventType,
      choosePackage,
      totalAmount,
      guests,
      message,
      formattedFromDateTime,
      formattedToDateTime,
    });

    // await user.save();
    await venue.save();
    console.log(venue);

    return NextResponse.json(
      {
        message: "Event booked successfully",
        success: true,
        venue,
      },
      {
        status: 200,
      }
    );
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
