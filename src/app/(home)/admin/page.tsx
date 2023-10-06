"use client";

import AllEvents from "@/components/admin/allEvents/AllEvents";
import AllUsers from "@/components/admin/allUsers/AllUsers";
import AllVenues from "@/components/admin/allVenues/AllVenues";
import axios from "axios";
import Link from "next/link";
import * as React from "react";

const page = () => {
  // get role
  const [isAdmin, setIsAdmin] = React.useState<any>({});
  const [allUsers, setAllUsers] = React.useState<any>(true);
  const [allVenues, setAllVenues] = React.useState<any>(false);
  const [allEvents, setAllEvents] = React.useState<any>(false);
  const userRole = async () => {
    try {
      const response = await axios.get(`/api/user`);
      console.log(response.data.user);
      setIsAdmin(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    userRole();
  }, []);

  return (
    <>
      {/* if role is admin */}
      {isAdmin.role === "admin" ? (
        <>
          <div
            style={{
              //   height: "80vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            {/* buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: "20px 60px",
                width: "100%",
                alignItems: "initial",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setAllUsers(true);
                  setAllVenues(false);
                  setAllEvents(false);
                }}
                style={{
                  color: "#fff",
                  backgroundColor: "#000",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                All Users
              </button>
              <button
                type="button"
                onClick={() => {
                  setAllUsers(false);
                  setAllVenues(true);
                  setAllEvents(false);
                }}
                style={{
                  color: "#fff",
                  backgroundColor: "#000",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                All Venues
              </button>
              <button
                type="button"
                onClick={() => {
                  setAllUsers(false);
                  setAllVenues(false);
                  setAllEvents(true);
                }}
                style={{
                  color: "#fff",
                  backgroundColor: "#000",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                All Events
              </button>
            </div>
            {/* value */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {allUsers && <AllUsers />}
              {allVenues && <AllVenues />}
              {allEvents && <AllEvents />}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Access Denied</h1>
            <p>You do not have access to this page</p>
            <Link href="/home">Back to Home </Link>
          </div>
        </>
      )}
      {/* if role in not admin */}
    </>
  );
};

export default page;
