"use client"
import { createTheme } from "@mui/material/styles";

export const Colors = {
  main: "#ED870F",
  black: "#000",
  white: "#fff",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.main,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
    },
  },
});
