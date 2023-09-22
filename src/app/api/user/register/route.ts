import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/db/connext";
import User from "@/models/userSchema";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const { user, role } = await request.json();
    const { name, email, password } = user;

    // Check if all fields are filled
    if (!name || !email || !password) {
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

    // check password length
    if (password.length < 6) {
      return NextResponse.json(
        {
          message: "Password length must me atleast 6 characters",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // Check if email aready registered
    const isEmailRegistered = await User.findOne({ email });

    if (isEmailRegistered) {
      return NextResponse.json(
        {
          message: "Email already registered",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const registerUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (user) {
      return NextResponse.json(
        {
          message: "User created successfully",
          success: true,
          registerUser,
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
        error: error,
      },
      {
        status: 400,
      }
    );
  }
}
