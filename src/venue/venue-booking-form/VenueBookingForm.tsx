"use client";

import * as React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";

const VenueBookingForm = ({ venueName }: any) => {
  const [totalAmount, setTotalAmount] = React.useState<any>(0);
  const [currentUserName, setCurrentUserName] = React.useState<any>("");
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [packages, setPackages] = React.useState<any>([]);
  const [choosePackage, setChoosePackage] = React.useState<any>("");
  const [handleFromDateTime, setHandleFromDateTime] = React.useState<any>(null);
  const [handleToDateTime, setHandleToDateTime] = React.useState<any>(null);
  const [tags, setTags] = React.useState<any>([]);
  const [eventType, setEventType] = React.useState<any>("");
  const [eventDetails, setEventDetails] = React.useState<any>({
    guests: null,
    message: "",
  });
  const [formattedFromDateTime, setFormattedFromDateTime] =
    React.useState<any>();
  const [formattedToDateTime, setFormattedToDateTime] = React.useState<any>();

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //   handle From Date time
  function handleFromDate(newValue: any) {
    setHandleFromDateTime(newValue.$d);

    setFormattedFromDateTime(
      dayjs(handleFromDateTime).format("ddd, MMM D, YYYY h:mm a")
    );
  }
  // console.log(formattedFromDateTime);

  // handle to date time
  function handleToDate(newValue: any) {
    setHandleToDateTime(newValue.$d);
    setFormattedToDateTime(
      dayjs(handleToDateTime).format("ddd, MMM D, YYYY h:mm a")
    );
  }
  // console.log(formattedToDateTime);

  //   venue data
  const singleVenue = async () => {
    const response = await axios.get(`/api/venue/${venueName}`);
    setTags(response.data.venue.tags);
  };

  // handleEvent Type
  function handleEventType(e: any) {
    setEventType(e);
    // console.log(e);
  }

  // handle event Details
  function handleEventDetails(e: any) {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  }

  // function filter By PackageName
  function filterByPackageName(e: any) {
    setChoosePackage(e);
  }

  // get package names
  const getPackageNames = async () => {
    const response = await axios.get(`/api/package/${venueName}`);
    // console.log(response.data.venuePackages);
    setPackages(response.data.venuePackages);
  };

  // get current user name
  const getCurrentUserName = async () => {
    const response = await axios.get(`/api/user`);
    setCurrentUserName(response.data.user.name);
  };

  // get total amount
  const getTotalAmount = async () => {
    const response = await axios.get(`/api/event-booking`);
    setTotalAmount(response.data.event.totalAmount);
  };

  React.useEffect(() => {
    singleVenue();
    getPackageNames();
  }, []);

  React.useEffect(() => {
    getCurrentUserName();
    getTotalAmount();
  }, [showModal]);

  // decode venue Name
  let encodedString = venueName;
  let decodedString = decodeURIComponent(encodedString);

  // handleFormSubmit
  async function handleFormSubmit(e: any) {
    e.preventDefault();
    try {
      setShowModal(false);
      await axios.post(`/api/event-booking`, {
        formattedFromDateTime,
        formattedToDateTime,
        eventDetails,
        eventType,
        choosePackage,
        venueName,
      });
      alert("success");
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  // handle confirm booking
  async function handleConfirmBooking(e: any) {
    e.preventDefault();
    try {
      await axios.post(`/api/event-booking/confirm`, {
        formattedFromDateTime,
        formattedToDateTime,
        eventDetails,
        eventType,
        choosePackage,
        totalAmount,
        decodedString,
      });
      alert("success");
      setShowModal(false);
    } catch (error) {
      setShowModal(false);
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
          <input
            type="number"
            required
            name="guests"
            placeholder="Please specify number of Guests"
            value={eventDetails.guests}
            onChange={handleEventDetails}
          />
        </div>
        {/* Event type */}
        <div style={{ margin: "0 0 10px 0" }}>
          <p>Select Event Type:</p>
          <select
            value={eventType}
            onChange={(e: any) => handleEventType(e.target.value)}
          >
            <option>Select Event Type</option>
            {tags.map((tag: any) => (
              <option value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        {/* event package */}
        <h1>Packages available are</h1>
        <select
          value={choosePackage}
          onChange={(e: any) => filterByPackageName(e.target.value)}
        >
          <option>Select Package</option>
          {packages.map((venuePackage: any) => (
            <option value={venuePackage.name}>{venuePackage.name}</option>
          ))}
        </select>
        {/* Specific message */}
        <div style={{ margin: "0 0 10px 0" }}>
          <input
            type="text"
            name="message"
            value={eventDetails.message}
            onChange={handleEventDetails}
            placeholder="Enter specific message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* create modal to confirm booking */}
      {showModal && (
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Booking
            </Typography>
            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleConfirmBooking}>
                {/* user name */}
                <div>
                  <label>Booked By:</label>
                  <input type="text" readOnly value={currentUserName} />
                </div>
                {/* venue name */}
                <div>
                  <label>Venue Name:</label>
                  <input type="text" readOnly value={decodedString} />
                </div>
                {/* package name */}
                <div>
                  <label>Package Name:</label>
                  <input type="text" readOnly value={choosePackage} />
                </div>
                {/* from date time */}
                <div>
                  <label>From Date and Time:</label>
                  <input type="text" readOnly value={formattedFromDateTime} />
                </div>
                {/* to date time */}
                <div>
                  <label>To Date and Time:</label>
                  <input type="text" readOnly value={formattedToDateTime} />
                </div>
                {/* event type */}
                <div>
                  <label>Event Type:</label>
                  <input type="text" readOnly value={eventType} />
                </div>
                {/* total attendees */}
                <div>
                  <label>Total Attendees:</label>
                  <input type="text" readOnly value={eventDetails.guests} />
                </div>
                {/*  */}
                <div>
                  <label>Message:</label>
                  <input type="text" readOnly value={eventDetails.message} />
                </div>
                {/* total amount */}
                <div>
                  <label>Total Amount:</label>
                  <input type="text" readOnly value={totalAmount} />
                </div>
                {/* submit and cancel button */}
                <div>
                  <button type="button">Cancel</button>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default VenueBookingForm;
