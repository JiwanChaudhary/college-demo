"use client";
import Venue from "@/venue/Venue";
import axios from "axios";
import Link from "next/link";
import * as React from "react";

// get user role

const page = () => {
  const [userRole, setUserRole] = React.useState<any>("");

  const getRole = async () => {
    const response = await axios.get(`/api/user`);
    setUserRole(response.data.user.role);
    console.log(response.data.user.role);
  };

  React.useEffect(() => {
    getRole();
  }, [userRole]);

  return (
    <>
      {userRole === "vendor" ? (
        <Venue />
      ) : (
        <div>
          <h1>Sorry, you have no access to this page</h1>
          <Link href="/home" style={{ textDecoration: "none" }}>
            Go back to home page
          </Link>
        </div>
      )}
    </>
  );
};

export default page;
