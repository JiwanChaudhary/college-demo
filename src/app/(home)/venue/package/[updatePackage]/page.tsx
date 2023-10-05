"use client";

import UpdatePackage from "@/components/updatePackage/UpdatePackage";
import axios from "axios";
import * as React from "react";

const page = ({ params }: any) => {
  const updatePackage = params.updatePackage;
  const [packageDetails, setPackageDetails] = React.useState<any>({}); // package details

  //   find package on the basis of package id
  const getPackageDetails = async () => {
    try {
      const response = await axios.get(`/api/${updatePackage}`);
      // console.log(response.data.getPackageDetails);
      setPackageDetails(response.data.getPackageDetails);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPackageDetails();
  }, []);

  return <UpdatePackage params={packageDetails} />;
};

export default page;
