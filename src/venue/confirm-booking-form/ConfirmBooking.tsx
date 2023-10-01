"use client";

import axios from "axios";
import React from "react";

const ConfirmBooking = () => {
  const handleConfirmBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.get(`api/confirm-booking`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>ConfirmBooking</h1>
      <form onSubmit={handleConfirmBooking}>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ConfirmBooking;
