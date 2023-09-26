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
      <button style={{background: "#ED870F", color: "#fff", border: "none", padding: "5px 8px", borderRadius: "5px", cursor: "pointer"}} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
