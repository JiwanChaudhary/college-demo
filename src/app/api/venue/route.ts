import connectDB from "@/db/connext";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const {
      venueName,
      address,
      maxCapacity,
      description,
      rentalFee,
      phone,
      email,
      tags,
      imageUrls,
    } = await request.json();

    // register venue
    const registerVenue = await Venue.create({
      venueName,
      address,
      maxCapacity,
      description,
      rentalFee,
      phone,
      email,
      tags,
      imageUrls,
    });

    if (registerVenue) {
      return NextResponse.json(
        {
          message: "Venue created successfully",
          success: true,
          registerVenue,
        },
        {
          status: 201,
        }
      );
    } else {
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

// get all venues
export async function GET(request: NextRequest) {
  await connectDB();
  try {
    const venues = await Venue.find({});
    if (venues) {
      return NextResponse.json(
        {
          message: "All venues",
          success: true,
          venues,
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
        status: 400,
      }
    );
  }
}
