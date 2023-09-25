"use client";

import axios from "axios";
import * as React from "react";

const page = () => {
  const [email, setEmail] = React.useState("");
  const [emailLink, setEmailLink] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/user`, { email });
      setEmailLink(true);
      alert("clicked");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Enter your email below to reset your password</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />
        </div>
        <div>
          <button type="submit">Change Password</button>
        </div>
      </form>
      {emailLink && (
        <>
          <p>
            Please go to your email and copy and paste the link in your browser
          </p>
        </>
      )}
    </>
  );
};

export default page;
