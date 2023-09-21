"use client"

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HomeWrapper = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  padding: "50px",
  display: "flex",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const HomeText = styled(Typography)(() => ({
  color: "white",
}));
