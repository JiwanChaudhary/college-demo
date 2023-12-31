import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Event from "@/models/eventBooking";
import Venue from "@/models/venueSpace";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // get data from token
    const token: any = await request.cookies.get("token")?.value;

    const decodedToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // userId
    const userId = decodedToken.id;
    // console.log(userId);

    // user Id ko adhar maa venue khojna parcha ani tyo venue id ko adhar maa event khojna parcha
    const venue = await Venue.findOne({ userId });
    const venueId = venue._id;

    // find event on the basis of venue id
    const event = await Event.find({ venueId })
      .populate("userId")
      .populate("packageId")
      .populate("venueId");
    // console.log(event);
    // console.log(event);

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
        message: "No bookings found",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
