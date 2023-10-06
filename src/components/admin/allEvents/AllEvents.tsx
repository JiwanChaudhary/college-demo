"use client";

import axios from "axios";
import * as React from "react";
import dayjs from "dayjs";

const AllEvents = () => {
  const [allEvents, setAllEvents] = React.useState<any>([]);

  // get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`/api/admin`);
      //   console.log(response.data.data.users);
      setAllEvents(response.data.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>The total events are: {allEvents.length} </h1>
      <hr
        style={{
          margin: "10px",
          height: "2px",
          color: "#000",
          background: "#000",
        }}
      />
      <div>
        {allEvents.map((event: any) => (
          <>
            <div key={event._id} style={{ textAlign: "left" }}>
              {/* userId */}
              <p>
                <span style={{ fontWeight: "bold" }}>userId: </span>
                {event.userId}
              </p>
              {/* venueId */}
              <p>
                <span style={{ fontWeight: "bold" }}>venueId: </span>
                {event.venueId}
              </p>
              {/* packageId */}
              <p>
                <span style={{ fontWeight: "bold" }}>packageId: </span>
                {event.packageId}
              </p>
              {/* message */}
              <p>
                <span style={{ fontWeight: "bold" }}>message: </span>
                {event.message}
              </p>
              {/* eventType */}
              <p>
                <span style={{ fontWeight: "bold" }}>eventType: </span>
                {event.eventType}
              </p>
              {/* eventFromDate */}
              <p>
                <span style={{ fontWeight: "bold" }}>eventFromDate: </span>
                {dayjs(event.eventFromDate).format("DD-MM-YYYY, h:mm: a")}
              </p>
              {/* eventToDate */}
              <p>
                <span style={{ fontWeight: "bold" }}>eventToDate: </span>
                {dayjs(event.eventToDate).format("DD-MM-YYYY, h:mm: a")}
              </p>
              {/* totalAttendees */}
              <p>
                <span style={{ fontWeight: "bold" }}>totalAttendees: </span>
                {event.totalAttendees}
              </p>
              {/* totalAmount */}
              <p>
                <span style={{ fontWeight: "bold" }}>totalAmount: </span>
                {event.totalAmount}
              </p>
              {/* status */}
              <p>
                <span style={{ fontWeight: "bold" }}>status: </span>
                {event.status}
              </p>
            </div>
            <hr
              style={{
                margin: "10px",
                height: "2px",
                color: "#000",
                background: "#000",
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
