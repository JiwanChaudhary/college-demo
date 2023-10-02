import Link from "next/link";
import React from "react";

const BecomeVendor = () => {
  return (
    <>
      <Link
        href={"/venue/venuedetails"}
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
        Become Vendor
      </Link>
    </>
  );
};

export default BecomeVendor;
