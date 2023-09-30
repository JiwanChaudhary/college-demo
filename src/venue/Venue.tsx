"use client";

import MyPackage from "@/venue/my-package/MyPackage";
import * as React from "react";
import MyVenue from "./my-venue/MyVenue";
import CurrentBookings from "./current-bookings/CurrentBookings";
import VenueStatus from "./venue-status/VenueStatus";

const Venue = () => {
  const [venue, setVenue] = React.useState(true);
  const [myPackage, setMyPackage] = React.useState(false);
  const [currentBookings, setCurrentBookings] = React.useState(false);
  const [venueStatus, setVenueStatus] = React.useState(false);

  return (
    <section style={{ margin: "20px 60px" }}>
      <main style={{ background: "#000", color: "#fff", padding: "10px" }}>
        {/* button display either venue or package */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* venue */}
          <button
            type="submit"
            onClick={() => {
              setVenue(true);
              setMyPackage(false);
              setCurrentBookings(false);
              setVenueStatus(false);
            }}
            style={{ cursor: "pointer", padding: "5px 8px" }}
          >
            My Venue
          </button>
          {/* package */}
          <button
            style={{ cursor: "pointer", padding: "5px 8px" }}
            type="submit"
            onClick={() => {
              setVenue(false);
              setMyPackage(true);
              setCurrentBookings(false);
              setVenueStatus(false);
            }}
          >
            My Packages
          </button>
          {/* current bookings */}
          <button
            style={{ cursor: "pointer", padding: "5px 8px" }}
            type="submit"
            onClick={() => {
              setVenue(false);
              setMyPackage(false);
              setCurrentBookings(true);
              setVenueStatus(false);
            }}
          >
            Current Bookings
          </button>
          {/* update available date */}
          <button
            style={{ cursor: "pointer", padding: "5px 8px" }}
            type="submit"
            onClick={() => {
              setVenue(false);
              setMyPackage(false);
              setCurrentBookings(false);
              setVenueStatus(true);
            }}
          >
            Venue Status
          </button>
        </div>
        <hr
          style={{
            color: "#fff",
            height: "2px",
            margin: "10px",
            background: "#fff",
          }}
        />
        {/* venue, package, current-bookings and venue-status */}
        <div
          style={{
            margin: "10px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Venue */}
          {venue && <MyVenue />}

          {/* Package */}
          {myPackage && <MyPackage />}

          {/* current bookings */}
          {currentBookings && <CurrentBookings />}

          {/* venue Status */}
          {venueStatus && <VenueStatus />}
        </div>
      </main>
    </section>
  );
};

export default Venue;
