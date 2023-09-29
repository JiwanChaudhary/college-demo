// import Footer from "@/components/footer/Footer";
import FirstSection from "@/components/home/firstSection/FirstSection";
import Filter from "@/components/home/secondSection/Filter";
import SecondSection from "@/components/home/secondSection/secondSection";
// import Navbar from "@/components/navbar/Navbar";
// import VerifyEmail from "@/components/VerifyEmail";
import * as React from "react";

const page = () => {
  return (
    <div>
      {/* <h4>Home</h4> */}
      {/* <Navbar /> */}
      <FirstSection />
      <Filter />
      <SecondSection />
      {/* <Footer /> */}
      {/* 
      <VerifyEmail /> */}
    </div>
  );
};

export default page;
