"use client";

import axios from "axios";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import VenueBookingForm from "@/venue/venue-booking-form/VenueBookingForm";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const page = ({ params }: any) => {
  const { venueName } = params;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [image, setImage] = React.useState([]);
  const [phone, setPhone] = React.useState([]);
  const [venue, setVenue] = React.useState<any>();
  const [availablePackages, setAvailablePackages] = React.useState<any>([]);
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

  // get single venue
  const singleVenue = async () => {
    const response = await axios.get(`/api/venue/${venueName}`);
    setImage(response.data.venue.imageUrls);
    setVenue(response.data.venue);
    setPhone(response.data.venue.phone);
  };

  // get venue Packages
  const venuePackages = async () => {
    const response = await axios.get(`/api/package/${venueName}`);
    // console.log(response.data.venuePackages);
    setAvailablePackages(response.data.venuePackages);
  };

  React.useEffect(() => {
    singleVenue();
    venuePackages();
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
      </main>
      {/* div */}
      <hr style={{ margin: "10px 0" }} />
      {/* content */}
      <div>
        <h1>{venue?.venueName}</h1>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          {/* Venue Desc with information */}
          <div>
            <p>Description:</p>
            <p>{venue?.description}</p>
            {/* packages */}
            <h2>Available Packages</h2>
            {availablePackages.map((venuePackage: any) => (
              <div>
                <Accordion sx={{ mb: 1 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{venuePackage.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ mb: 1 }}>
                    {/* package description */}
                    <div style={{ display: "flex" }}>
                      <p>Package Description: </p>
                      <p>{venuePackage.description}</p>
                    </div>
                    {/* package basePrice */}
                    <div style={{ display: "flex" }}>
                      <p>Base Price: </p>
                      <p>{venuePackage.basePrice}</p>
                    </div>
                    {/* numberOfPeopleForBasePrice */}
                    <div style={{ display: "flex" }}>
                      <p>Number of people for base price: </p>
                      <p>{venuePackage.numberOfPeopleForBasePrice}</p>
                    </div>
                    {/* capacity */}
                    <div style={{ display: "flex" }}>
                      <p>Capacity: </p>
                      <p>{venuePackage.capacity}</p>
                    </div>
                    {/* additionalPricePerPerson */}
                    <div style={{ display: "flex" }}>
                      <p>Additional Price Per Person: </p>
                      <p>{venuePackage.additionalPricePerPerson}</p>
                    </div>
                    {/* servicesIncluded */}
                    <div style={{ display: "flex" }}>
                      <p>Services Included: </p>
                      <p>{venuePackage.servicesIncluded}</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            {availablePackages.length === 0 && (<><p>No packages</p></>)}
            {/* Venue Information here */}
            <div>
              <p>location: {venue?.address}</p>
              <p>
                phone:{" "}
                {phone.map((p) => (
                  <span>{p}, </span>
                ))}
              </p>
              <p>email: {venue?.email}</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #fff",
              padding: "5px",
              textAlign: "center",
            }}
          >
            {/* venue Booking Form */}
            <VenueBookingForm venueName={venueName} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
