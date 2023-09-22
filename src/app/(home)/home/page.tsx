"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const page = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.get("/api/user/logout");
    alert("Logout success!");
    router.push("/login");
  };

  return (
    <div>
      <h4>Home</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default page;
