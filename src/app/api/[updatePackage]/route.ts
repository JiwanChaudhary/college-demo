import connectDB from "@/db/connext";
import Package from "@/models/package";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  await connectDB();

  try {
    // console.log(params);
    const { updatePackage } = params;

    const getPackageDetails = await Package.findOne({
      _id: updatePackage,
    });

    if (!getPackageDetails) {
      return NextResponse.json(
        {
          message: "Package not found",
          success: false,
        },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Package found",
          success: true,
          getPackageDetails,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      { status: 400 }
    );
  }
}

// update package
export async function PUT(request: NextRequest, { params }: any) {
  await connectDB();

  try {
    const { updatePackage } = params;

    const { newPackageDetails } = await request.json();

    // update package
    const newPackage = await Package.findOneAndUpdate(
      { _id: updatePackage },
      {
        ...newPackageDetails,
      }
    );

    if (newPackage) {
      return NextResponse.json(
        {
          message: "package updated",
          success: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "package not found",
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
      { status: 400 }
    );
  }
}

// delete package
export async function DELETE(request: NextRequest, { params }: any) {
  await connectDB();
  try {
    console.log(params);
    const { updatePackage } = params;
    console.log(updatePackage);

    // find and delete package
    const deletePackage = await Package.findOneAndDelete({
      _id: updatePackage,
    });

    if (deletePackage) {
      return NextResponse.json(
        {
          message: "package deleted",
          success: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "package not found",
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
      { status: 400 }
    );
  }
}
