"use client";

import axios from "axios";
import * as React from "react";

const page = () => {
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`/api/user/resetpassword`, { password, token });
      alert("password changed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  //   get token from URL
  React.useEffect(() => {
    const urlToken: string = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div>
      <h4>Enter New Password</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default page;
