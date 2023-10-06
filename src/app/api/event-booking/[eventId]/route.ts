import connectDB from "@/db/connext";
import Event from "@/models/eventBooking";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  await connectDB();

  try {
    const eventId = params.eventId;

    // find event on the basis of eventId
    const event = await Event.findOne({ _id: eventId })
      .populate("userId")
      .populate("packageId")
      .populate("venueId");

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
          status: 200,
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
        status: 200,
      }
    );
  }
}
