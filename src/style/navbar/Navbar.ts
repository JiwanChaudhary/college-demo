"use client"

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "@/theme/index";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: Colors.white,
  width: "100%",
  margin: "0px"
}));
export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100px",
  height: "60px",
  marginRight: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 15,
  right: "30px",
  color: Colors.white,
  zIndex: 1999,
}));

// header
// export const NavbarHeader = styled(Typography)(() => ({
//     padding: "4px",
//     flexGrow: 1,
//     fontSize: "4em",
//     color: Colors.black,
// }));

// //list
// export const MyList = styled(List)(({ type }) => ({
//     display: type === "row" ? "flex" : "block",
//     // flexGrow: 3,
//     justifyContent: "center",
//     alignItems: "center",
//     color: Colors.black,
// }));
