import connectDB from "@/db/connext";
import Event from "@/models/eventBooking";
import User from "@/models/userSchema";
import Venue from "@/models/venueSpace";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    // get all users
    const users = await User.find({});

    // get all venues
    const venues = await Venue.find({});

    // get all bookings
    const bookings = await Event.find({});

    return NextResponse.json(
      {
        message: "All data",
        success: true,
        data: {
          users,
          venues,
          bookings,
        },
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
