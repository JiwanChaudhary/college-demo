import connectDB from "@/db/connext";
import User from "@/models/userSchema";
import { sendMail } from "@/helper/mailer";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    // get email from user
    const { email } = await request.json();

    // find user on the basis of email
    const user = await User.findOne({ email });

    // show error if user does not exist
    if (!user) {
      return NextResponse.json(
        {
          message: "User is not registered",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // send mail if the user found
    await sendMail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json(
      {
        message: "User found and email sent",
        success: true,
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        message: "Email not sent",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}

// get user details from token

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // get token from cookies
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const userId = decodeToken.id;

    // find user on the basis of userId
    const user = await User.findOne({ _id: userId });
    if (user) {
      return NextResponse.json(
        {
          message: "User found",
          success: true,
          user,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "User not found",
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
        error: error,
        message: "Cannot find user",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
