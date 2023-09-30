"use client";

import axios from "axios";
import * as React from "react";

const MyPackage = () => {
  // get package details
  const getPackageDetails = async () => {
    try {
      const response = await axios.get(`/api/package`);
      // console.log(response);
      // yesle kaam garcha
    } catch (error) {
      console.log(error);
    }
  };

  // call getPackageDetails function in useEffect
  React.useEffect(() => {
    getPackageDetails();
  }, []);

  return <div>MyPackage</div>;
};

export default MyPackage;
