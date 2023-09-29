"use client";

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

const images = [
  {
    id: 1,
    imgPath: "/images/venue.jpeg",
  },
  {
    id: 2,
    imgPath: "/images/venue.jpeg",
  },
  {
    id: 3,
    imgPath: "/images/venue.jpeg",
  },
];

const SingleVenue = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  //   handle Date
  function handleDate(dates: any) {
    // console.log(dates);
  }

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
            {images.map((step, index) => (
              <div key={step.id}>
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
                    src={step.imgPath}
                    alt={"image"}
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
        <hr style={{ margin: "10px 0" }} />
        {/* content */}
        <div>
          <h1>Venue Name</h1>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
            {/* Venue Desc with information */}
            <div>
              <p>Description:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde possimus nesciunt vitae. Quibusdam fugiat
                dignissimos in qui voluptatem blanditiis, reiciendis autem
                repellat nobis eius eaque officiis totam ea ducimus at quos
                provident, beatae sed quisquam tempora, excepturi repudiandae
                maiores. Rerum, accusantium quidem quos illum maiores officiis
                ab consequuntur iusto?
              </p>
              {/* packages */}
              <div>FAQ here</div>
              {/* Venue Information here */}
              <div>
                <p>location</p>
                <p>contact</p>
                <p>phone</p>
                <p>email</p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #fff",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <form>
                <div>
                  {/* Date and Time */}
                  <Space direction="vertical" size={5}>
                    <RangePicker
                      showTime={{ format: "HH" }}
                      format="DD-MM-YYYY HH"
                      onChange={handleDate}
                    />
                  </Space>
                </div>
                {/* Number of Guests */}
                <div>
                  Number of Guests:
                  <input
                    type="number"
                    placeholder="Please specify number of Guests"
                  />
                </div>
                {/* Event type */}
                <div>
                  <p>Select Event Type:</p>
                  <select>
                    <option value="party">Party</option>
                    <option value="party">Party</option>
                    <option value="party">Party</option>
                    <option value="party">Party</option>
                    <option value="party">Party</option>
                  </select>
                </div>
                {/* Select Package Type */}
                <div>
                  <p>Select package Type</p>
                  <select>
                    <option value="normal">Normal</option>
                    <option value="normal">Premium</option>
                    <option value="normal">Deluxe</option>
                  </select>
                </div>
                {/* Personal Details */}
                <div>
                  <input type="text" placeholder="Enter name" />
                  <input type="phone" placeholder="Enter Phone" />
                  <input type="email" placeholder="Enter email" />
                </div>
                {/* Specific message */}
                <div>
                  <textarea placeholder="Enter specific message"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SingleVenue;
