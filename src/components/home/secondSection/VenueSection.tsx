import * as React from "react";
import Image from "next/image";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const VenueSection = () => {
  const router = useRouter();
  const [venues, setVenues] = React.useState([]);


  // Get data from database
  const getVenueDetails = async () => {
    const response = await axios.get("/api/venue");
    // console.log(response.data.venues);

    setVenues(response.data.venues);
  };

  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>VENUE SPACE</h1>

      {venues.map((venue: any) => (
        <div
          key={venue._id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "15px 0 0 0",
            alignItems: "center",
            padding: 0,
            border: "none",
          }}
        >
          <div>
            <Image
              src={venue.imageUrls[1]}
              alt={venue.venueName}
              width={265}
              height={250}
              style={{ borderRadius: "10px" }}
            />
          </div>
          {/* desc */}
          <div
            style={{
              background: "#fff",
              color: "#000",
              height: "245px",
              width: "auto",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div>
              <h1 style={{ padding: "5px 0" }}>{venue.venueName}</h1>
              <p style={{ padding: "0 0 5px 0" }}>
                <span style={{ fontWeight: "bold" }}>Desc: </span>
                {venue.description}
              </p>
              <p
                style={{
                  padding: "0 0 5px 0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AddLocationIcon
                  style={{ height: 20, width: 20, marginRight: 5 }}
                />{" "}
                <span style={{ alignItems: "center" }}>{venue.address}</span>
              </p>
              <p style={{ padding: "0 0 5px 0" }}>
                <span style={{ fontWeight: "bold" }}>Tags:</span>{" "}
                {venue.tags.map((tag: any) => (
                  <span>
                    {tag}
                    {", "}
                  </span>
                ))}
              </p>
              <p style={{ padding: "0 0 5px 0" }}>
                <span style={{ fontWeight: "bold" }}>Capacity: </span>
                {venue.maxCapacity}
              </p>
            </div>
            <div
              style={{
                // padding: "5px 8px",
                float: "right",
                margin: "5px 10px",
              }}
            >
              <Link
                href={`/venue/${venue.venueName}`}
                type="button"
                style={{
                  padding: "5px 8px",
                  textDecoration: "none",
                  border: "1px solid #000",
                  color: "#000",
                  borderRadius: "5px"
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VenueSection;
