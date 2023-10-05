import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Event from "@/models/eventBooking";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // get userId from token
    const token: any = await request.cookies.get("token")?.value;
    const decodedToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodedToken.id;

    // find bookings on the basis of userId
    const bookings = await Event.find({ userId })
      .populate("packageId")
      .populate("venueId");

    if (bookings) {
      return NextResponse.json(
        {
          message: "Bookings found",
          success: true,
          bookings,
        },
        {
          status: 200,
        }
      );
    } else {
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
