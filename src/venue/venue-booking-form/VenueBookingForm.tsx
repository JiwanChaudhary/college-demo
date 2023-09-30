"use client";

import * as React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import axios from "axios";

const VenueBookingForm = ({ venueName }: any) => {
  const [handleFromDateTime, setHandleFromDateTime] = React.useState<any>(null);
  const [handleToDateTime, setHandleToDateTime] = React.useState<any>(null);
  const [tags, setTags] = React.useState([]);

  //   handle From Date time
  function handleFromDate(newValue: any) {
    setHandleFromDateTime(newValue.$d);
    const formattedFromDateTime = dayjs(handleFromDateTime).format(
      "ddd, MMM D, YYYY h:mm a"
    );
    console.log(formattedFromDateTime);
  }

  // handle to date time
  function handleToDate(newValue: any) {
    setHandleToDateTime(newValue.$d);
    const formattedToDateTime = dayjs(handleToDateTime).format(
      "ddd, MMM D, YYYY h:mm a"
    );
    console.log(formattedToDateTime);
  }

  //   venue data
  const singleVenue = async () => {
    const response = await axios.get(`/api/venue/${venueName}`);
    setTags(response.data.venue.tags);
  };

  React.useEffect(() => {
    singleVenue();
  }, []);

  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 0 10px 0",
        }}
      >
        {/* Date and Time */}

        {/* from date time */}
        <DateTimePicker
          label="Select from date and time"
          value={handleFromDateTime}
          onChange={handleFromDate}
          sx={{ mb: 3 }}
        />
        {/* to date time */}
        <DateTimePicker
          label="Select to date and time"
          value={handleToDateTime}
          onChange={handleToDate}
        />
      </div>
      {/* Number of Guests */}
      <div style={{ margin: "0 0 10px 0" }}>
        Number of Guests:
        <input type="number" placeholder="Please specify number of Guests" />
      </div>
      {/* Event type */}
      <div style={{ margin: "0 0 10px 0" }}>
        <p>Select Event Type:</p>
        <select>
          {tags.map((tag: any) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      {/* Personal Details */}
      <div style={{ margin: "0 0 10px 0" }}>
        <input type="text" placeholder="Enter name" />
        <input type="phone" placeholder="Enter Phone" />
        <input type="email" placeholder="Enter email" />
      </div>
      {/* Specific message */}
      <div style={{ margin: "0 0 10px 0" }}>
        <textarea placeholder="Enter specific message">Message</textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VenueBookingForm;
