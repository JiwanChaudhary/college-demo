"use client";

import axios from "axios";
import * as React from "react";

const UserProfile = () => {
  const [userDetails, setUserDetails] = React.useState<any>({});

  //   get user bookings
  const getUserBookings = async () => {
    try {
      const response = await axios.get(`/api/event-booking/get-user-booking`);
      console.log(response.data.event);
      //   yaha data aaucha
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
  }, []);

  //   handle user verification
  const handleUserVerify = () => {
    alert("Please check your mail for verification link");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "10px 60px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <button type="button" style={{ padding: "5px 8px", cursor: "pointer" }}>
          Profile
        </button>
        {userDetails.role === "vendor" ? null : (
          <>
            <button
              type="button"
              style={{ padding: "5px 8px", cursor: "pointer" }}
            >
              Bookings
            </button>
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* user details */}
        <div>
          {/* name */}
          <p>
            <span style={{ fontWeight: "bold" }}>Name:</span> {userDetails.name}
          </p>
          {/* email */}
          <p>
            <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
            {userDetails.email}
          </p>
          {/* role */}
          <p>
            <span style={{ fontWeight: "bold" }}>Role:</span> {userDetails.role}
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
        {/* user bookings */}
        {userDetails.role === "vendor" ? null : (
          <>
            <div>
              <p>no current bookings</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
