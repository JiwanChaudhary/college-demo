"use client";

import axios from "axios";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const page = ({ params }: any) => {
  // console.log(params);
  const { venueName } = params;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [image, setImage] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [venue, setVenue] = React.useState<any>();
  const maxSteps = image.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  // console.log(venue);

  //   handle Date
  function handleDate(dates: any) {
    // console.log(dates);
  }

  // console.log(image);
  // console.log(image.length);

  const singleVenue = async () => {
    const response = await axios.get(`/api/venue/${venueName}`);
    // console.log(response.data.venue);
    // console.log(response.data.venue.imageUrls.length);
    setImage(response.data.venue.imageUrls);
    setTags(response.data.venue.tags);
    setVenue(response.data.venue);
  };

  React.useEffect(() => {
    singleVenue();
  }, []);

  return (
    <section style={{ padding: "10px 60px", margin: "15px 0" }}>
      <main style={{ background: "#000", color: "#fff", padding: "10px" }}>
        {/* Carousel */}
        <Box sx={{ flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {image.map((step: any, index: any) => (
              <div key={index}>
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
                    src={step}
                    alt={index}
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
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
        {/* select */}
        <select>
          {tags.map((tag: any) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
      </main>
    </section>
  );
};

export default page;
