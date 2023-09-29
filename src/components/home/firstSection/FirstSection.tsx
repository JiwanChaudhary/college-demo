import Image from "next/image";
import React from "react";
import SwipeableTextMobileStepper from "../secondSection/Carousel";

const FirstSection = () => {
  return (
    <div style={{ padding: "10px 60px" }}>
      <div
        style={{
          // background: "#000",
          display: "flex",
          justifyContent: "center",
          // padding: "10px",
        }}
      >
        <SwipeableTextMobileStepper />
      </div>
      {/* <div style={{ position: "relative" }}>
        <Image
          style={{
            margin: "0px auto",
            width: "100vw",
            height: "200px",
            padding: "30px 60px",
          }}
          src={"/images/firstSection.jpeg"}
          alt="firstSection"
          height={200}
          width={1000}
        />
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "10%",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <span>HOME</span> | <span style={{ color: "#ED870F" }}>HOME</span>
        </div>
      </div> */}
    </div>
  );
};

export default FirstSection;
