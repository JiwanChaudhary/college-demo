"use client";

import * as React from "react";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { cookies } from "next/headers";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {

  // theme
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ margin: 0, position: "sticky", top: 0, }}>
      {matches ? <NavbarMobile /> : <NavbarDesktop />}
    </div>
  );
};

export default Navbar;
