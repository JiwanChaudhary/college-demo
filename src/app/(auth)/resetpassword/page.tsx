"use client";

import axios from "axios";
import Link from "next/link";
import * as React from "react";

const page = () => {
  const [email, setEmail] = React.useState("");
  const [emailLink, setEmailLink] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(true);
  const [isEmailRegistered, setIsEmailRegistered] = React.useState(false);
  const [isEmailRegisteredMessage, setIsEmailRegisteredMessage] =
    React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/user`, { email });
      setEmailLink(true);
      setIsEmail(false);
    } catch (error: any) {
      console.log(error);
      // console.log(error.response.data.message);
      setIsEmailRegistered(true);
      setIsEmailRegisteredMessage(error.response.data.message);
    }
  };

  return (
    <>
      {isEmail && (
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
        </>
      )}
      {/* if email not registered */}
      {isEmailRegistered && (
        <>
          <p>{isEmailRegisteredMessage}</p>
          <Link href={"/register"}>Register?</Link>
        </>
      )}
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
