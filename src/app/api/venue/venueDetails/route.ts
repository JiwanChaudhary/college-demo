import connectDB from "@/db/connext";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { vendorDetails, description, tags, phone } = await request.json();
    // console.log(vendorDetails, description, tags, phone);

    const { venueName, address, maxCapacity, rentalFee, email } = vendorDetails;

    const updateVenue = await Venue.create({
      venueName,
      address,
      maxCapacity,
      rentalFee,
      email,
      description,
      tags,
      phone,
    });

    if (updateVenue) {
      return NextResponse.json(
        {
          message: "Venue details added",
          success: true,
          updateVenue,
        },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Something went wrong", success: false },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", success: false },
      { status: 400 }
    );
  }
}
