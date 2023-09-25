import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";
import VerifyEmail from "@/components/VerifyEmail";
import * as React from "react";

const page = () => {
  return (
    <div>
      <h4>Home</h4>
      <Logout />
      <Navbar />
      <VerifyEmail />
    </div>
  );
};

export default page;
