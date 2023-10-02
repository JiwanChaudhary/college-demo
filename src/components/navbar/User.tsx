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

const User = () => {
  // let cookieStore = cookies();
  // let token, decodedToken;
  // token = cookieStore.get("token")?.value;
  // decodedToken = jwt.verify(
  //   token as string,
  //   process.env.JWT_SECRET as string
  // ) as JwtPayload;

  // const name = decodedToken.name;
  // let firstName = name.split(" ")[0];
  // let firstLetter = firstName[0];
  const [dropdown, setDropdown] = React.useState(false);

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
            height: "30px",
            width: "30px",
            gap: "50px",
          }}
        >
          JC
        </Avatar>
        <h3>Jiwan</h3>
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
              href={"/profile"}
            >
              Profile
            </Link>
            <BecomeVendor />
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
