import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const response = await NextResponse.json(
    {
      message: "Logout Success!",
      success: true,
    },
    {
      status: 200,
    }
  );

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(),
  });

  return response;
}
