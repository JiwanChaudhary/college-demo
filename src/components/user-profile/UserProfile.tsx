"use client";

import axios from "axios";
import * as React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState<any>({});
  const [profile, setProfile] = React.useState<any>(true); // user profile
  const [userBookings, setUserBookings] = React.useState<any>(false); // user bookings
  const [bookings, setBookings] = React.useState<any>([]);

  // table head
  const tableHead = [
    {
      id: 1,
      value: "Venue Name",
    },
    {
      id: 2,
      value: "Package Name",
    },
    {
      id: 3,
      value: "From Date",
    },
    {
      id: 4,
      value: "To Date",
    },
    {
      id: 5,
      value: "Total Amount",
    },
    {
      id: 6,
      value: "Total Attendee",
    },
    {
      id: 7,
      value: "Status",
    },
    {
      id: 8,
      value: "Action",
    },
  ];

  //   get user bookings
  const getUserBookings = async () => {
    try {
      const response = await axios.get(`/api/event-booking/getUserBookings`);
      //   yaha data aaucha
      setBookings(response.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  // get user details
  const getUserDetails = async () => {
    try {
      const response = await axios.get(`/api/user`);
      // console.log(response.data.user);
      setUserDetails(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserDetails();
    getUserBookings();
  }, [profile, userBookings]);

  //   handle user verification
  const handleUserVerify = () => {
    alert("Please check your mail for verification link");
  };

  // handle pay now
  const handlePayNow = (e: any) => {
    const eventId = e.target.value;
    router.push(`/venue/payment/${eventId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 60px",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <button
          type="button"
          style={{ padding: "5px 8px", cursor: "pointer" }}
          onClick={() => {
            setProfile(true);
            setUserBookings(false);
          }}
        >
          Profile
        </button>
        {userDetails.role === "vendor" ? null : (
          <>
            <button
              type="button"
              style={{ padding: "5px 8px", cursor: "pointer" }}
              onClick={() => {
                setProfile(false);
                setUserBookings(true);
              }}
            >
              Bookings
            </button>
          </>
        )}
      </div>
      <hr style={{ color: "#000", width: "100%", margin: "10px auto" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* user details */}
        {profile && (
          <div>
            {/* name */}
            <p>
              <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
              {userDetails.name}
            </p>
            {/* email */}
            <p>
              <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
              {userDetails.email}
            </p>
            {/* role */}
            <p>
              <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
              {userDetails.role}
            </p>
            {/* isVerified */}
            <p>
              {userDetails.isVerified ? (
                <>
                  <p
                    style={{
                      border: "1px solid green",
                      background: "green",
                      color: "#fff",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    User Verified
                  </p>
                </>
              ) : (
                <>
                  <p
                    style={{
                      border: "1px solid red",
                      background: "red",
                      color: "#fff",
                    }}
                  >
                    Please verify your account
                  </p>
                </>
              )}
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {userDetails.isVerified ? null : (
                <>
                  <button
                    type="submit"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onClick={handleUserVerify}
                  >
                    Verify Account Now
                  </button>
                </>
              )}
              {/* update profile */}
              <button
                type="submit"
                style={{ padding: "5px 8px", cursor: "pointer" }}
              >
                Update your profile
              </button>
            </div>
          </div>
        )}
        {/* user bookings */}
        {userBookings && (
          <>
            {userDetails.role === "vendor" ? null : (
              <>
                <table
                  style={{
                    borderCollapse: "collapse",
                    border: "1px solid red",
                  }}
                >
                  {/* head */}
                  <tr style={{ border: "1px solid red" }}>
                    {tableHead.map((th) => (
                      <>
                        <th
                          key={th.id}
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {th.value}
                        </th>
                      </>
                    ))}
                  </tr>
                  {/* body */}
                  {bookings.map((booking: any) => (
                    <>
                      <tr style={{ border: "1px solid red" }} key={booking._id}>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {booking?.venueId?.venueName}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {booking?.packageId?.name}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {dayjs(booking?.eventFromDate).format(
                            "DD/MM/YYYY, h:mm a"
                          )}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {dayjs(booking?.eventToDate).format(
                            "DD/MM/YYYY, h:mm a"
                          )}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {booking?.totalAmount}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {booking?.totalAttendees}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                          }}
                        >
                          {booking?.status}
                        </td>
                        <td
                          style={{
                            border: "1px solid red",
                            textAlign: "center",
                            padding: "2px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {/* <button
                            type="button"
                            style={{
                              marginBottom: "2px",
                              cursor: "pointer",
                              background: "red",
                              border: "none",
                              borderRadius: "4px",
                              padding: "4px",
                            }}
                          >
                            Cancel
                          </button> */}
                          <button
                            type="submit"
                            style={{
                              cursor: "pointer",
                              background: "green",
                              border: "none",
                              borderRadius: "4px",
                              padding: "4px",
                            }}
                            onClick={handlePayNow}
                            value={booking._id}
                          >
                            Pay Now
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                  <tr></tr>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
