"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.get("/api/user/logout");
    alert("Logout success!");
    router.push("/login");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
