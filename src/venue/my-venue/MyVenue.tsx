"use client";

import axios from "axios";
import * as React from "react";

const MyVenue = () => {
  // get venue details
  const getVenueDetails = async () => {
    const response = await axios.get(`/api/venue/venueDetails`);
    // console.log(response);
    // yaha data aaucha
  };

  // render venue details, fire once
  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return <div>MyVenue</div>;
};

export default MyVenue;
