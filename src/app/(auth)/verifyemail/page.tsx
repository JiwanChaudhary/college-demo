"use client";

import axios from "axios";
import Link from "next/link";
import * as React from "react";

const page = () => {
  const [token, setToken] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  const verifyEmail = async () => {
    try {
      await axios.post(`/api/user/verifyemail`, { token });
      alert("User verified successfully!");
      setVerified(true);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  React.useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div>
      {verified ? (
        <>
          <p>Email Verified Successfully!</p>
          <Link href={"/home"}>Go to Home</Link>
        </>
      ) : (
        <>
          <p>Please check your mail to verify your email</p>
        </>
      )}
    </div>
  );
};

export default page;
