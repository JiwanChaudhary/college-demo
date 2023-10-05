import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Venue from "@/models/venueSpace";
import { log } from "console";
import connectDB from "@/db/connext";

export async function PUT(request: NextRequest) {
  await connectDB();

  try {
    const { newVenueDetails } = await request.json();
    // console.log(newVenueDetails);

    // find venue owner using cookies
    const token: any = await request.cookies.get("token")?.value;
    const decodedToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // const user id
    const userId = decodedToken.id;

    // find venue using user id
    const venue = await Venue.findOneAndUpdate(
      { userId },
      {
        ...newVenueDetails,
      }
    );

    if (venue) {
      return NextResponse.json(
        {
          message: "venue updated",
          success: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "venue not found",
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
        message: "something went wrong",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
