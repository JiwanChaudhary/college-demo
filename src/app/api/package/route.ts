import connectDB from "@/db/connext";
import Package from "@/models/package";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Venue from "@/models/venueSpace";

// create package
export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { eventPackage } = await request.json();

    const {
      name,
      description,
      basePrice,
      numberOfPeopleForBasePrice,
      capacity,
      additionalPricePerPerson,
      servicesIncluded,
    } = eventPackage;

    // find vendor that creates the package
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // console.log(decodeToken.id);

    const id = decodeToken.id;
    // console.log(id);

    const vendor = await Venue.findOne({ userId: id });
    // console.log(vendor);

    const venueId = vendor._id;
    // console.log(venueId);

    // create package
    const packageForEvent = await Package.create({
      venueId,
      name,
      description,
      basePrice,
      numberOfPeopleForBasePrice,
      capacity,
      additionalPricePerPerson,
      servicesIncluded,
    });

    // if package created
    if (packageForEvent) {
      return NextResponse.json(
        {
          message: "Package created successfully",
          success: true,
          packageForEvent,
        },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Sorry! Package couldnot be created now, try again later",
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
      },
      {
        status: 400,
      }
    );
  }
}

// get package details of the specific venue
export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // find vendor that creates the package
    const token: any = await request.cookies.get("token")?.value;

    const decodeToken: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const id = decodeToken.id;

    const vendor = await Venue.findOne({ userId: id });

    const venueId = vendor._id;

    // find package on the basis of venueId
    const VenuePackages = await Package.find({ venueId });

    // if packages found
    if (VenuePackages) {
      return NextResponse.json(
        {
          message: "The packages for venue",
          success: "true",
          VenuePackages,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Something went wrong, please try again later",
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
      },
      {
        status: 400,
      }
    );
  }
}
