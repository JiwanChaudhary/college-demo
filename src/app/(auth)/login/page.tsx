"use client";
import { FormGroup, FormWrapper, Heading, RegisterButton } from "@/style/auth";
import { Input, InputLabel, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  // functions

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await axios.post("/api/user/login", { user });
      setError(false);
      alert("User Logged in successfully!");
      router.push("/home");
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <FormWrapper>
      <FormGroup>
        {/* Heading */}
        <Heading align="center" variant="h1">
          Login
        </Heading>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* email */}
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              name="email"
              value={user?.email}
              id="email"
              type="email"
              required
              placeholder="Enter email"
              onChange={handleChange}
            />
          </FormControl>
          {/* password */}
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              value={user?.password}
              id="password"
              type="password"
              required
              placeholder="Enter password"
              onChange={handleChange}
            />
          </FormControl>
          {error && <small>{errorMessage}</small>}
          <RegisterButton
            onClick={handleSubmit}
            disableElevation
            disableFocusRipple
            variant="contained"
          >
            Login
          </RegisterButton>
        </form>
        <small>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            href={"/register"}
          >
            Register
          </Link>
        </small>
      </FormGroup>
    </FormWrapper>
  );
};

export default page;
