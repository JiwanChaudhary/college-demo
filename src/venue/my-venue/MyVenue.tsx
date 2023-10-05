"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const MyVenue = () => {
  const [myVenue, setMyVenue] = React.useState<any>({});
  const [venueTags, setVenueTags] = React.useState<any>([]);
  const [contact, setContact] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [venueName, setVenueName] = React.useState<any>("");
  const router = useRouter();
  // get venue details
  const getVenueDetails = async () => {
    setLoading(true);
    const response = await axios.get(`/api/venue/venueDetails`);

    // console.log(response.data);
    setMyVenue(response.data.VenueDetails);
    setVenueTags(response.data.VenueDetails.tags);
    setContact(response.data.VenueDetails.phone);
    setVenueName(response.data.VenueDetails.venueName);
    // yaha data aaucha
    setLoading(false);
  };
  // console.log(myVenue.venueName);

  // update venue
  const handleUpdateVenue = () => {
    router.push(`/my-venue/${venueName}`);
  };

  // upload image
  const handleUploadLImage = () => {
    router.push(`/my-venue/upload-image`);
  };

  // render venue details, fire once
  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <div
          style={{
            width: "100%",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* venue details and update venue button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <h2>Venue Details</h2>
            <div>
              <button
                type="submit"
                style={{
                  padding: "5px 8px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={handleUpdateVenue}
              >
                Update Venue
              </button>
              <button
                type="submit"
                style={{ padding: "5px 8px", cursor: "pointer" }}
                onClick={handleUploadLImage}
              >
                Upload Image
              </button>
            </div>
          </div>
          <hr style={{ width: "100%", marginBottom: "10px" }} />
          {/* my venue details */}
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
            {/* image */}
          </div>
        </div>
        // image
      )}
    </>
  );
};

export default MyVenue;
