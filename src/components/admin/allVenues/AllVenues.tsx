"use client";

import axios from "axios";
import * as React from "react";

const AllVenues = () => {
  const [allVenues, setAllVenues] = React.useState<any>([]);

  // get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`/api/admin`);
      //   console.log(response.data.data.users);
      setAllVenues(response.data.data.venues);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>There are total {allVenues.length} registed venues</h1>
      <hr
        style={{
          margin: "10px",
          height: "2px",
          color: "#000",
          background: "#000",
        }}
      />
      <div>
        {allVenues.map((venue: any) => (
          <>
            <div key={venue._id} style={{ textAlign: "left" }}>
              {/* venueName */}
              <p>
                <span style={{ fontWeight: "bold" }}>venueName: </span>
                {venue.venueName}
              </p>
              {/* address */}
              <p>
                <span style={{ fontWeight: "bold" }}>address: </span>
                {venue.address}
              </p>
              {/* maxCapacity */}
              <p>
                <span style={{ fontWeight: "bold" }}>maxCapacity: </span>
                {venue.maxCapacity}
              </p>
              {/* description */}
              <p>
                <span style={{ fontWeight: "bold" }}>description: </span>
                {venue.description}
              </p>
              {/* rentalFee */}
              <p>
                <span style={{ fontWeight: "bold" }}>rentalFee: </span>
                {venue.rentalFee}
              </p>
              {/* phone */}
              <p>
                <span style={{ fontWeight: "bold" }}>phone: </span>
                {venue.phone}
              </p>
              {/* email */}
              <p>
                <span style={{ fontWeight: "bold" }}>email: </span>
                {venue.email}
              </p>
              {/* tags */}
              <p>
                <span style={{ fontWeight: "bold" }}>tags: </span>
                {venue.tags}
              </p>
            </div>
            <hr
              style={{
                margin: "10px",
                height: "2px",
                color: "#000",
                background: "#000",
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllVenues;
