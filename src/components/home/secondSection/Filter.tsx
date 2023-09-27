"use client"

import * as React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const Filter = () => {
  const [searchKey, setSearchKey] = React.useState("");

  // handleDate
  const handleDate = (date: any) => {
    console.log(date);
  };

  // filter by search
  function filterBySearch() {}
  return (
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
  );
};

export default Filter;
