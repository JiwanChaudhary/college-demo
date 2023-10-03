"use client";

import * as React from "react";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { cookies } from "next/headers";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import Logout from "../Logout";
import BecomeVendor from "../BecomeVendor";
import axios from "axios";
import MyVenue from "../MyVenue";

const User = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const [userRole, setUserRole] = React.useState<any>("");
  const [userName, setUserName] = React.useState<any>("");
  const [firstLetterOfFirstName, setFirstLetterOfFirstName] =
    React.useState<any>("");
  const [lastLetterOfLastName, setLastLetterOfLastName] =
    React.useState<any>("");

  const getUserRole = async () => {
    const response = await axios.get("/api/user");
    // console.log(response.data.user.role);
    setUserRole(response.data.user.role);
    setUserName(response.data.userName);
    setFirstLetterOfFirstName(response.data.firstLetterOfFirstName);
    setLastLetterOfLastName(response.data.lastLetterOfLastName);
    // console.log(response.data.user);
  };

  React.useEffect(() => {
    getUserRole();
  }, []);

  const handleIcon = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <div
      style={{
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
        }}
      >
        {" "}
        <Avatar
          sx={{
            bgcolor: "#ED870F",
            height: "35px",
            width: "35px",
            gap: "50px",
            mr: "5px",
          }}
        >
          {firstLetterOfFirstName}
          {lastLetterOfLastName}
        </Avatar>
        <h3>{userName}</h3>
      </div>
      <div>
        <button
          type="button"
          style={{
            background: "none",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleIcon}
        >
          <KeyboardArrowDownIcon />
        </button>
        {dropdown && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
              border: "1px solid #ED870F",
              position: "absolute",
              top: "8% !important",
              right: "10px",
              borderRadius: "5px",
              zIndex: "1000",
            }}
          >
            <Logout />
            <Link
              style={{
                textDecoration: "none",
                background: "#ED870F",
                color: "#fff",
                border: "none",
                padding: "5px 8px",
                borderRadius: "5px",
                marginTop: "5px",
                cursor: "pointer",
              }}
              href={"/user-profile"}
            >
              Profile
            </Link>
            {userRole === "user" && <BecomeVendor />}
            {userRole === "vendor" && <MyVenue />}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
