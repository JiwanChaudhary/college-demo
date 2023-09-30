"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [venues, setVenues] = React.useState<any>([]);
  // const [venueImages, setVenueImages] = React.useState([]);
  const [totalImagesNumber, setTotalImagesNumber] = React.useState(0);
  const maxSteps = totalImagesNumber;
  // console.log(maxSteps);
  // console.log(venues);
  // console.log(activeStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  // Get data from database
  const getVenueDetails = async () => {
    const response = await axios.get("/api/venue");
    // console.log(response.data.venues.length);
    setTotalImagesNumber(response.data.venues.length);

    setVenues(response.data.venues);
    console.log(venues);
  };

  React.useEffect(() => {
    getVenueDetails();
  }, []);

  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {venues.map((step: any, index: any) => (
          <div key={step.venueName}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "flex",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imageUrls[0]}
                alt={step.venueName}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      {/* Text */}
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          // width: "inherit",
          height: 50,
          pl: 2,
          pr: 2,
          bgcolor: "#000",
          color: "#fff",
        }}
      >
        <>
          <Typography sx={{ textAlign: "center", display: "flex" }}>
            <LocationOnIcon />
            <Typography sx={{ color: "#fff" }}>
              {venues[activeStep]?.address}
            </Typography>
          </Typography>

          <Typography sx={{ color: "#fff" }}>
            {venues[activeStep]?.venueName}
          </Typography>
        </>
      </Paper>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
