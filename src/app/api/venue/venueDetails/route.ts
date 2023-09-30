import connectDB from "@/db/connext";
import Venue from "@/models/venueSpace";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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
