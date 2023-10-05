import axios from "axios";
import * as React from "react";
import dayjs from "dayjs";

const CurrentBookings = () => {
  const [currentBookings, setCurrentBookings] = React.useState<any>([]);
  const [bookedBy, setBookedBy] = React.useState<any>("");
  const [loading, setLoading] = React.useState(false);

  const getCurrentBookings = async () => {
    setLoading(true);
    const response = await axios.get(`api/event-booking/getBookingDetails`);
    console.log(response.data.event);
    setCurrentBookings(response.data.event);

    // yaha data aaucha
    setLoading(false);
  };

  React.useEffect(() => {
    getCurrentBookings();
  }, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <div>
          <h1>Current Bookings</h1>

          {currentBookings.length > 0 ? (
            <>
              <p style={{ margin: "10px 0" }}>
                The Total numbers of bookings are: {currentBookings.length}
              </p>
              {currentBookings.map((booking: any, index: any) => (
                <>
                  <div key={index}>
                    {/* booked by */}
                    <h1>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        Booked By:
                      </span>{" "}
                      {booking?.userId?.name}
                    </h1>
                    {/* venue name */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Venue Name: </span>
                      {booking?.venueId?.venueName}
                    </p>
                    {/* package name */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Package Name: </span>
                      {booking?.packageId?.name}
                    </p>
                    {/* from date */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>From: </span>
                      {dayjs(booking?.eventFromDate).format(
                        "DD-MM-YYYY, h:mm a"
                      )}
                    </p>
                    {/* to date */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>To Date: </span>
                      {dayjs(booking?.eventToDate).format("DD-MM-YYYY, h:mm a")}
                    </p>
                    {/* total amount */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Total amount: </span>
                      Rs: {booking?.totalAmount}
                    </p>
                    {/* total attendee */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Total guests: </span>
                      {booking?.totalAttendees}
                    </p>
                    {/* special requests */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Special Requests:{" "}
                      </span>
                      {booking?.message}
                    </p>
                    {/* status */}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Event Status: </span>
                      <span style={{ color: "green" }}>{booking?.status}</span>
                    </p>
                  </div>
                  <hr style={{ fontWeight: "bold", margin: "10px 0" }} />
                </>
              ))}
            </>
          ) : (
            <p>No current bookings</p>
          )}
        </div>
      )}
    </>
  );
};

export default CurrentBookings;
