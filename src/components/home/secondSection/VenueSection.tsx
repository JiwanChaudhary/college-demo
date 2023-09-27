import * as React from "react";
import Image from "next/image";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Modal from "@mui/material/Modal";

const VenueSection = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>VENUE SPACE</h1>
      <div
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
            src={"/images/venue.jpeg"}
            alt="venue"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
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
            <h1 style={{ padding: "5px 0" }}>Venue Name</h1>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Desc: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              error, nemo magnam pariatur nulla ratione.
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
              <span style={{ alignItems: "center" }}>Kathmandu, Nepal</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Tags:</span>{" "}
              <span> marriage, party, anniversary</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Price Per Day: </span>
              Rs. 1000
            </p>
          </div>
          {/* Buttons */}
          <div
            style={{
              // padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
          >
            <button
              type="button"
              style={{ padding: "5px 8px", marginRight: "5px" }}
            >
              View Details
            </button>
            <button type="button" style={{ padding: "5px 8px" }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div
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
            src={"/images/venue.jpeg"}
            alt="venue"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
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
            <h1 style={{ padding: "5px 0" }}>Venue Name</h1>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Desc: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              error, nemo magnam pariatur nulla ratione.
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
              <span style={{ alignItems: "center" }}>Kathmandu, Nepal</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Tags:</span>{" "}
              <span> marriage, party, anniversary</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Price Per Day: </span>
              Rs. 1000
            </p>
          </div>
          {/* Buttons */}
          <div
            style={{
              // padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
          >
            <button
              type="button"
              style={{ padding: "5px 8px", marginRight: "5px" }}
            >
              View Details
            </button>
            <button type="button" style={{ padding: "5px 8px" }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div
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
            src={"/images/venue.jpeg"}
            alt="venue"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
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
            <h1 style={{ padding: "5px 0" }}>Venue Name</h1>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Desc: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              error, nemo magnam pariatur nulla ratione.
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
              <span style={{ alignItems: "center" }}>Kathmandu, Nepal</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Tags:</span>{" "}
              <span> marriage, party, anniversary</span>
            </p>
            <p style={{ padding: "0 0 5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Price Per Day: </span>
              Rs. 1000
            </p>
          </div>
          {/* Buttons */}
          <div
            style={{
              // padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
          >
            <button
              type="button"
              style={{ padding: "5px 8px", marginRight: "5px" }}
            >
              View Details
            </button>
            <button type="button" style={{ padding: "5px 8px" }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueSection;
