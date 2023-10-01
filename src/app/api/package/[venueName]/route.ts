import connectDB from "@/db/connext";
import Package from "@/models/package";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  connectDB();

  const { venueName } = params;
//   console.log(venueName);
  try {
    // find venue on the basis of venueName
    const venue = await Venue.findOne({ venueName });
    // console.log(venue);

    const venueId = venue._id;
    // console.log(venueId);

    // find venue packages on the basis of venueId
    const venuePackages = await Package.find({ venueId });
    // console.log(venuePackages);

    if (venuePackages) {
      return NextResponse.json(
        {
          message: "Venue packages found",
          success: true,
          venuePackages,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Venue packages not found",
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
