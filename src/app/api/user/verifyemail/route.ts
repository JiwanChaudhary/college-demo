import connectDB from "@/db/connext";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const { token } = await request.json();
    console.log(token);

    // find user on the basis of token
    const user = await User.findOne({ verifyToken: token });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid Token",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      {
        message: "User Verified Successfully!",
        success: true,
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
