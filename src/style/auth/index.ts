"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "@/theme";

export const FormGroup = styled(Box)(() => ({
  border: "1px solid black",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

// export const MainForm = styled(form)(() => ({

export const Heading = styled(Typography)(() => ({
  fontSize: "2rem",
  fontWeight: "bold",
}));

export const RegisterButton = styled(Button)(() => ({
  marginTop: "10px",
  width: "100%",
  background: Colors.main,
  color: Colors.white,
  "&:hover": {
    background: Colors.main,
    color: Colors.white,
  },
  "&:active": {
    scale: "1.2",
  },
}));

export const FormWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#000",
}));
