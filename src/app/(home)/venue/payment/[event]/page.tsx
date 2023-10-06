"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const page = ({ params }: any) => {
  const router = useRouter();
  //   console.log(params);
  const eventId = params.event;
  //   console.log(eventId);
  const [eventDetails, setEventDetails] = React.useState<any>({});

  //   get event details on the basis of eventId
  const getEventDetails = async () => {
    try {
      const getPayment = await axios.get(`/api/event-booking/${eventId}`);
      //   console.log(getPayment.data.event);
      setEventDetails(getPayment.data.event);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(eventDetails);

  const handlePayment = async () => {
    // console.log("clicked");
    const payload = {
      return_url: process.env.NEXT_PUBLIC_RETURN_URL,
      website_url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      amount: Number(eventDetails?.totalAmount),
      purchase_order_id: "test12",
      purchase_order_name: `${eventDetails?.packageId?.name}`,
      customer_info: {
        name: `${eventDetails?.userId?.name}`,
        email: `${eventDetails?.userId?.email}`,
        phone: "9862981619",
      },
    };
    try {
      const response = await axios.post(`/api/payment`, payload);
      //   console.log(response.data.data.payment_url);
      router.push(response.data.data.payment_url);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getEventDetails();
  }, []);

  return (
    <>
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
            border: "1px solid #000",
            width: "400px",
          }}
        >
          <h2>Payment Details</h2>
          <hr style={{ margin: "10px", color: "000" }} />
          {/* payment details here */}

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Venue Name */}
            <p>
              <span style={{ fontWeight: "bold" }}>Venue name:</span>{" "}
              {eventDetails?.venueId?.venueName}
            </p>
            {/* Package Name */}
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Package name:</span>{" "}
              {eventDetails?.packageId?.name}
            </p>
            {/* total guests */}
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Total attendee:</span>{" "}
              {eventDetails?.totalAttendees}
            </p>
            {/* total paying amount */}
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Total amount:</span>{" "}
              {eventDetails?.totalAmount}
            </p>
            <div>
              <button
                type="submit"
                style={{
                  padding: "5px 8px",
                  border: "none",
                  color: "#fff",
                  background: "green",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={handlePayment}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
