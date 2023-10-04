import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Event from "@/models/eventBooking";
import axios from "axios";

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

    // find event on the basis of userId
    const event: any = await Event.find({ userId });
    // console.log(event);

    // get venue details
    // let venueId: any = [];

    // event.map((venue: any) => {
    //   venueId.push(venue.venueId);
    // });
    // console.log(venueId);

    // venueId.map((name: any) => {
    //   console.log(name.venueName);
    // });

    // get package details

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
