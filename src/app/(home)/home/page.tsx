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
      console.log(res.data.user.role);
      setUserRole(res.data.user.role);
    } catch (error) {
      console.log(error);
    }
  };

  // handleRole
  const handleRole = () => {
    router.push("/my-venue");
  };

  // React.useEffect(() => {
  //   gerUserRole();
  //   handleRole();
  // }, []);

  return (
    <div>
      <>
        <FirstSection />
        <Filter />
        <SecondSection />
      </>

      {userRole === "vendor" && (
        <>
          <div style={{ color: "#fff", margin: "10px 0" }}>
            <p>You do not have access to this page</p>
            <button type="submit" onSubmit={handleRole}>
              Go to My Venue
            </button>
          </div>
        </>
      )}
      {/* 
      <VerifyEmail /> */}
    </div>
  );
};

export default page;
