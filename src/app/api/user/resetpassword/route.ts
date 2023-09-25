import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/connext";
import User from "@/models/userSchema";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { token, password } = await request.json();

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // find user on the basis of token
    const user = await User.findOneAndUpdate(
      {
        forgotPasswordToken: token,
      },
      {
        password: hashedPassword,
      }
    );

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

    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      {
        message: "password reset successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        error: error,
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
