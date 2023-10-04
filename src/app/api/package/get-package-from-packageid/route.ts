import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
  } catch (error) {
    return NextResponse.json(
      {
        message: "No package found",
        success: false,
      },
      {
        status: 200,
      }
    );
  }
}
