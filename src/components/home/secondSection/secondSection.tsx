"use client";

import * as React from "react";
import { DatePicker, Space } from "antd";
import Image from "next/image";
const { RangePicker } = DatePicker;
import styles from "./secondSection.module.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Modal from "@mui/material/Modal";
import EventSection from "./EventSection";
import VenueSection from "./VenueSection";

const SecondSection = () => {
  const [searchKey, setSearchKey] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // handleDate
  const handleDate = (date: any) => {
    console.log(date);
  };

  // filter by search
  function filterBySearch() {}
  return (
    <section style={{ padding: "30px 60px" }}>
      <div style={{ background: "#000", color: "#fff", padding: "10px 15px" }}>
        {/* date and search */}
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyContent: "space-between",
            justifyItems: "center",
            margin: "15px 0",
          }}
        >
          {/* date */}
          <div style={{ zIndex: 100 }}>
            <Space direction={"vertical"} size={"small"}>
              <RangePicker format="DD-MM-YYYY" onChange={handleDate} />
            </Space>
          </div>
          {/* search by entering name */}
          <div>
            <input
              style={{ padding: "5px 8px" }}
              type="text"
              placeholder="search venues or events"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyUp={filterBySearch}
            />
          </div>
        </main>
        {/*  */}
        {/*  */}
        {/*  */}
        {/* event and venue */}
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            margin: "0 0 15px 0",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* event space */}
          <EventSection />
          {/* venue space */}
          <VenueSection />
        </main>
        {/*  */}
        {/*  */}
        {/*  */}
        {/* top events */}
        <main></main>
      </div>
    </section>
  );
};

export default SecondSection;
