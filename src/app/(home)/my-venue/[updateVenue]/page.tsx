"use client";

import UpdateVenue from "@/components/updateVenue/UpdateVenue";
import axios from "axios";
import React from "react";

const page = () => {
  // const vanueName = params.updateVenue;
  //   console.log(vanueName);
  const [venueDetails, setVenueDetails] = React.useState<any>({});

  //   get venuedetails from db
  const getVenueDetails = async () => {
    const response = await axios.get(`/api/venue/venueDetails`);
    // console.log(response.data.VenueDetails);
    setVenueDetails(response.data.VenueDetails);
  };

  // const {
  //   venueName,
  //   address,
  //   maxCapacity,
  //   description,
  //   rentalFee,
  //   phone,
  //   email,
  //   tags,
  // }: any = venueDetails;

  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return (
    <div>
      {/* <p>hello</p> */}
      <UpdateVenue params={venueDetails} />
    </div>
  );
};

export default page;
