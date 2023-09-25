"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const VerifyEmail = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/verifyemail");
  };

  return (
    <div>
      <button type="submit" onClick={handleClick}>
        Verify Email
      </button>
    </div>
  );
};

export default VerifyEmail;
