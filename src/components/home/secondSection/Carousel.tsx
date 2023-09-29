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

// const images = [
//   {
//     label: "ABC Hotel",
//     imgPath: "/images/venue.jpeg",
//     location: "Kathmandu",
//   },
//   {
//     label: "ABC Banquet",
//     imgPath: "/images/venue.jpeg",
//     location: "Pokhara",
//   },
//   {
//     label: "ABC Hall",
//     imgPath: "/images/venue.jpeg",
//     location: "Nepal",
//   },
//   {
//     label: "Hall Nepal",
//     imgPath: "/images/venue.jpeg",
//     location: "Himal",
//   },
// ];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [venues, setVenues] = React.useState([]);
  const [venueImages, setVenueImages] = React.useState([]);
  const [totalImagesNumber, setTotalImagesNumber] = React.useState(0);
  const maxSteps = totalImagesNumber;

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
    console.log(response.data.venues);

    setVenues(response.data.venues);
    // setVenueImages(response.data.venues.imageUrls)
    // setTotalImagesNumber(response.data.venues.imageUrls.length)
    // console.log(venueImages);
    // console.log(totalImagesNumber);
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
        {venues.map((step: any, index) => (
          <div key={step.venueName}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "flex",
                  // height: "400px",
                  // maxWidth: 400,
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
        <Typography sx={{ textAlign: "center", display: "flex" }}>
          <LocationOnIcon />
          {/* <Typography>{venues[activeStep].address}</Typography> */}
        </Typography>
        {/* <Typography>{venues[activeStep].venueName}</Typography> */}
      </Paper>
      {/* Content */}
      {/* <div style={{ marginTop: "10px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde
          exercitationem soluta, ratione explicabo sapiente ipsum
        </p>
        <Link
          href={"/venue"}
          style={{
            textDecoration: "none",
            color: "purple",
            cursor: "pointer",
            float: "right",
          }}
        >
          View the destination Venues?
        </Link>
      </div> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
