import connectDB from "@/db/connext";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// provide venue details
export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { vendorDetails, description, tags, phone } = await request.json();
    // console.log(vendorDetails, description, tags, phone);

    const { venueName, address, maxCapacity, rentalFee, email } = vendorDetails;

    // get current vendor ID from jwt
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const updateVenue = await Venue.create({
      userId: decodeToken.id,
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

// get venue details on the basis of current vendor login ID
export async function GET(request: NextRequest) {
  await connectDB();
  try {
    // get current vendor ID from jwt
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // vendor id
    const id = decodeToken.id;

    const VenueDetails = await Venue.findOne({ userId: id });

    // if venue details found
    if (VenueDetails) {
      return NextResponse.json(
        {
          message: "Venue Found",
          success: true,
          VenueDetails,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Something went wrong, try again later", success: false },
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
