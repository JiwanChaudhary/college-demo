import connectDB from "@/db/connext";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const payload = await request.json();
    const khaltiResponse = await axios.post(
      `https://a.khalti.com/api/v2/epayment/initiate/`,
      payload,
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );
    console.log(khaltiResponse);

    if (khaltiResponse) {
      return NextResponse.json(
        {
          message: "Payment Data fetched",
          success: true,
          data: khaltiResponse.data,
        },
        {
          status: 200,
        }
      );
    }
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
