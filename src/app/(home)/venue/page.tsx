"use client";
import Filter from "@/components/home/secondSection/Filter";
import VenueSection from "@/components/home/secondSection/VenueSection";
import React from "react";

const page = () => {
  // search room by type
  function filterByType() {}

  return (
    <div>
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "20px 10px",
          margin: "10px 60px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Filter />
        <div>
          <select
            style={{ padding: "5px 8px" }}
            value={"all"}
            onChange={filterByType}
          >
            <option value="all">All Tags</option>
            <option value="deluxe">Marriage</option>
            <option value="non-deluxe">Party</option>
            <option value="non-deluxe">Welcome</option>
            <option value="non-deluxe">Anniversary</option>
          </select>
        </div>
      </div>
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "20px 10px",
          margin: "10px 60px",
        }}
      >
        <VenueSection />
      </div>
    </div>
  );
};

export default page;
