"use client";

import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  const [searchKey, setSearchKey] = React.useState("");

  // filter by search
  function filterBySearch() {}
  return (
    <main
      style={{
        margin: "10px 0 0 0",
        padding: "10px 60px",
      }}
    >
      <div
        style={{
          background: "#000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* date */}
        <div
          style={{
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            marginRight: "5px",
          }}
        >
          <input
            style={{ width: "150px", padding: "5px", border: "none" }}
            type="text"
            id="location"
            placeholder="Search by location"
          />
        </div>  
        <div
          style={{
            display: "flex",
            marginLeft: "5px",
            justifyContent: "center",
            background: "white",
            color: "#000",
            cursor: "pointer",
          }}
        >
          <SearchIcon />
          <button
            style={{ padding: "4px", border: "none", cursor: "pointer" }}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default Filter;
