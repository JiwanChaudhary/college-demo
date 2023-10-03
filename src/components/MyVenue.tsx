import axios from "axios";
import Link from "next/link";
import React from "react";

const MyVenue = () => {
  return (
    <>
      <Link
        href={"/my-venue"}
        style={{
          textDecoration: "none",
          background: "#ED870F",
          color: "#fff",
          border: "none",
          padding: "5px 8px",
          borderRadius: "5px",
          marginTop: "5px",
          cursor: "pointer",
        }}
      >
        my-venue
      </Link>
    </>
  );
};

export default MyVenue;
