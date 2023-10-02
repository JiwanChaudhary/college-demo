"use client";

// import Footer from "@/components/footer/Footer";
import FirstSection from "@/components/home/firstSection/FirstSection";
import Filter from "@/components/home/secondSection/Filter";
import SecondSection from "@/components/home/secondSection/secondSection";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Navbar from "@/components/navbar/Navbar";
// import VerifyEmail from "@/components/VerifyEmail";
import * as React from "react";

const page = () => {
  const [userRole, setUserRole] = React.useState<any>("");
  const router = useRouter();

  const gerUserRole = async () => {
    try {
      const res = await axios.get("/api/user");
      // console.log(res.data.user.role);
      setUserRole(res.data.user.role);
    } catch (error) {
      console.log(error);
    }
  };

  // handleRole
  const handleRole = () => {
    alert("You do not have access to this page");
    router.push("/my-venue");
  };

  React.useEffect(() => {
    gerUserRole();
    handleRole();
  }, []);

  return (
    <div>
      {userRole === "user" ? (
        <>
          <FirstSection />
          <Filter />
          <SecondSection />
        </>
      ) : (
        <>
          <button type="submit" onClick={handleRole}>
            You do not have access to this page
          </button>
        </>
      )}
      {/* 
      <VerifyEmail /> */}
    </div>
  );
};

export default page;
