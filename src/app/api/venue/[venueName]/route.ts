import connectDB from "@/db/connext";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  connectDB();

  const { venueName } = params;

  try {
    const venue = await Venue.findOne({ venueName });

    return NextResponse.json(
      {
        message: "Venue found",
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
