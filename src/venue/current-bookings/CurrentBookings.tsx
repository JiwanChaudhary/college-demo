import axios from "axios";
import * as React from "react";

const CurrentBookings = () => {
  const [currentBookings, setCurrentBookings] = React.useState<any>([]);
  const [bookedBy, setBookedBy] = React.useState<any>("");
  const [loading, setLoading] = React.useState(false);

  const getCurrentBookings = async () => {
    setLoading(true);
    const response = await axios.get(`/api/venue/venueDetails`);
    // console.log(response.data.user.name);
    setBookedBy(response.data.user.name);

    // console.log(response.data.VenueDetails.currentBookings);
    setCurrentBookings(response.data.VenueDetails.currentBookings);
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
              <h4>Booked By: {bookedBy}</h4>
              {currentBookings.map((currentBooking: any) => (
                <>
                  <p>userId: {currentBooking.userId}</p>
                  <p>event type: {currentBooking.eventType}</p>
                  <p>package: {currentBooking.choosePackage}</p>
                  <p>Total number of guests: {currentBooking.guests}</p>
                  <p>Total Amount: {currentBooking.totalAmount}</p>
                  <p>Requests: {currentBooking.message}</p>
                  <p>
                    Event Start Date: {currentBooking.formattedFromDateTime}
                  </p>
                  <p>Event End Date: {currentBooking.formattedToDateTime}</p>
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
