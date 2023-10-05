import connectDB from "@/db/connext";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Venue from "@/models/venueSpace";
import { join } from "path";
import path from "path";
import { writeFile } from "fs/promises";
import multer from "multer";
import formidable from "formidable";

export async function POST(request: NextRequest) {
  await connectDB();

  // const formData = await request.formData();

  // const file: any = formData.get("image");

  // if (!file) {
  //   return NextResponse.json({ error: "No files received." }, { status: 400 });
  // }

  // const buffer = Buffer.from(await file.arrayBuffer());
  // const filename = Date.now() + file.name.replaceAll(" ", "_");
  // console.log(filename);

  try {
    // const storage = multer.diskStorage({
    //   destination: function (request, file, cb) {
    //     return cb(null, "./public/uploads/");
    //   },
    //   filename: function (request, file, cb) {
    //     return cb(null, `${Date.now()}-${file.originalname}`);
    //   },
    // });
    // // console.log(storage);

    // const upload = multer({
    //   storage,
    // });
    // upload.single("image");

    // await writeFile(
    //   path.join(process.cwd(), "public/uploads/" + filename),
    //   buffer
    // );
    // return NextResponse.json({ Message: "Success", status: 201 });

    //  get user data from cookies
    const token: any = await request.cookies.get("token")?.value;
    const decodedToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // get userId from decoded token
    const userId = decodedToken?.id;

    // get venueId from usrId
    const venue = await Venue.findOne({ userId: userId });
    // console.log(venue);

    return NextResponse.json(
      {
        message: "file uploaded successfully",
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
