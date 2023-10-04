"use client";

import axios from "axios";
import * as React from "react";

const Payment = () => {
  const getBookingDetails = async () => {
    const response = await axios.get(`/api/event-booking/get-user-booking`);
    console.log(response.data);
  };

  React.useEffect(() => {
    getBookingDetails();
  }, []);

  return <div>Payment</div>;
};

export default Payment;
