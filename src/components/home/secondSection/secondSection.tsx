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
import Filter from "./Filter";

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
        <main
          style={{
            display: "grid",
            // gridTemplateColumns: "1fr 1fr",
            margin: "0 0 15px 0",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <VenueSection />
        </main>
      </div>
    </section>
  );
};

export default SecondSection;
