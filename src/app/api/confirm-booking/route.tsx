import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Event from "@/models/eventBooking";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // find user that  books the event
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodeToken.id;
    console.log(userId);
    

    //    find event on the basis of userId
    // const event = await Event.findOne({ userId }).populate("venue");
    // console.log(event);
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
