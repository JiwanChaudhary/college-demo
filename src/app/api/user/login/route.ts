import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/db/connext";
import User from "@/models/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendMail } from "@/helper/mailer";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const { user } = await request.json();
    const { email, password } = user;

    // Check if all fields are filled
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "All fields are required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // find email on the basis on email
    const findUser = await User.findOne({ email });

    // check if user is registered
    if (!findUser) {
      return NextResponse.json(
        {
          message: "Email not registered",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // compare password
    const isPassword = await bcrypt.compare(password, findUser.password);

    if (!isPassword) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // create token
    const tokenData = {
      id: findUser._id,
      email: findUser.email,
      name: findUser.name,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    // send mail verification email
    await sendMail({ email, emailType: "VERIFY", userId: findUser._id });

    // if user credentials match, return user
    const response = await NextResponse.json(
      {
        message: "Login Success",
        success: true,
      },
      {
        status: 200,
      }
    );

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
        error: error,
      },
      {
        status: 400,
      }
    );
  }
}
