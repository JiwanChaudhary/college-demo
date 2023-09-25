import connectDB from "@/db/connext";
import User from "@/models/userSchema";
import { sendMail } from "@/helper/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    // get email from user
    const { email } = await request.json();
    console.log(email);
    

    // find user on the basis of email
    const user = await User.findOne({ email });
    console.log(user);
    

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
