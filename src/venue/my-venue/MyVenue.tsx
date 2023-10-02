"use client";

import axios from "axios";
import * as React from "react";

const MyVenue = () => {
  const [myVenue, setMyVenue] = React.useState<any>({});
  const [venueTags, setVenueTags] = React.useState<any>([]);
  const [contact, setContact] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  // get venue details
  const getVenueDetails = async () => {
    setLoading(true);
    const response = await axios.get(`/api/venue/venueDetails`);

    // console.log(response.data);
    setMyVenue(response.data.VenueDetails);
    setVenueTags(response.data.VenueDetails.tags);
    setContact(response.data.VenueDetails.phone);
    // yaha data aaucha
    setLoading(false);
  };
  // console.log(myVenue.venueName);

  // render venue details, fire once
  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <h1>{myVenue.venueName}</h1>
          <hr />
          {/* description */}
          <div>
            <p>Description: </p>
            <p>{myVenue.description}</p>
          </div>
          <hr />
          {/* address */}
          <div>
            <p>Address: </p>
            <p>{myVenue.address}</p>
          </div>
          <hr />
          {/* email */}
          <div>
            <p>Email: </p>
            <p>{myVenue.email}</p>
          </div>
          <hr />
          {/* venue Capacity */}
          <div>
            <p>Capacity of venue: </p>
            <p>{myVenue.maxCapacity}</p>
          </div>
          <hr />
          {/* venue Rental Fee */}
          <div>
            <p>Rental Fee: </p>
            <p>{myVenue.rentalFee}</p>
          </div>
          <hr />
          {/* tags */}
          <div>
            <p>Tags: </p>
            <p style={{ display: "flex" }}>
              {venueTags.map((tag: any) => (
                <p>{tag}, </p>
              ))}
            </p>
          </div>
          <hr />
          {/* phone */}
          <div>
            <p>Phone: </p>
            <p style={{ display: "flex" }}>
              {contact.map((contact: any) => (
                <p>{contact}, </p>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MyVenue;
