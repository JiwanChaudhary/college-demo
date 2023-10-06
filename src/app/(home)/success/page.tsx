"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

const page = () => {
  const router = useRouter();

  const redirectUrl = () => {
    alert("Payment success");
    router.push("/user-profile");
  };

  React.useEffect(() => {
    redirectUrl();
  }, []);

  return <div style={{ height: "80vh" }}>Your payment has been successful</div>;
};

export default page;
