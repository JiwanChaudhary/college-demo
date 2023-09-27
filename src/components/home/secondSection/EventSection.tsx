import * as React from "react";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import SwipeableTextMobileStepper from "./Carousel";

const EventSection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            background: "#292b29",
            border: "2px solid #292b29",
            boxShadow: "24",
            padding: 4,
            color: "#fff",
          }}
        >
          {/* <p id="modal-modal-title">hello</p> */}
          <p id="modal-modal-description">
            <SwipeableTextMobileStepper />
          </p>
        </div>
      </Modal>
      <h1 style={{ textAlign: "center" }}>EVENT SPACE</h1>
      {/* event details */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "15px 0 0 0",
          alignItems: "center",
          padding: 0,
          border: "none",
        }}
        // className={styles.eventSpace}
      >
        {/* photo */}
        <div>
          <Image
            src={"/images/event.jpeg"}
            alt="event"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
        {/* desc */}
        <div
          style={{
            background: "#fff",
            color: "#000",
            height: "245px",
            width: "auto",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <h2 style={{ padding: "5px 0" }}>Event Name</h2>
          <p style={{ padding: "5px 0 5px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            neque quod tempora totam error impedit nisi aut officia molestias
            temporibus ipsum ab similique dolor maxime fugit, veniam maiores
            perferendis deserunt.
          </p>
          <button
            style={{
              padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
            type="button"
            onClick={handleOpen}
          >
            View Details
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "15px 0 0 0",
          alignItems: "center",
          padding: 0,
          border: "none",
        }}
        // className={styles.eventSpace}
      >
        {/* photo */}
        <div>
          <Image
            src={"/images/event.jpeg"}
            alt="event"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
        {/* desc */}
        <div
          style={{
            background: "#fff",
            color: "#000",
            height: "245px",
            width: "auto",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <h2 style={{ padding: "5px 0" }}>Event Name</h2>
          <p style={{ padding: "5px 0 5px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            neque quod tempora totam error impedit nisi aut officia molestias
            temporibus ipsum ab similique dolor maxime fugit, veniam maiores
            perferendis deserunt.
          </p>
          <button
            style={{
              padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
            type="button"
            onClick={handleOpen}
          >
            View Details
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "15px 0 0 0",
          alignItems: "center",
          padding: 0,
          border: "none",
        }}
        // className={styles.eventSpace}
      >
        {/* photo */}
        <div>
          <Image
            src={"/images/event.jpeg"}
            alt="event"
            width={265}
            height={250}
            style={{ borderRadius: "10px" }}
          />
        </div>
        {/* desc */}
        <div
          style={{
            background: "#fff",
            color: "#000",
            height: "245px",
            width: "auto",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <h2 style={{ padding: "5px 0" }}>Event Name</h2>
          <p style={{ padding: "5px 0 5px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            neque quod tempora totam error impedit nisi aut officia molestias
            temporibus ipsum ab similique dolor maxime fugit, veniam maiores
            perferendis deserunt.
          </p>
          <button
            style={{
              padding: "5px 8px",
              float: "right",
              margin: "5px 10px",
            }}
            type="button"
            onClick={handleOpen}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
