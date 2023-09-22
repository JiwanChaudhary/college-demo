"use client";
import { FormGroup, FormWrapper, Heading, RegisterButton } from "@/style/auth";
import { Input, InputLabel, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [role, setRole] = React.useState("user");

  // functions
  const handleRoleChange = (e: SelectChangeEvent) => {
    setRole(e.target.value as string);
  };

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
      setError(false);
      await axios.post("/api/user/register", { user, role });
      alert("User Registered Successfully!");
      router.push("/login");
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };

  return (
    <FormWrapper>
      <FormGroup>
        {/* Heading */}
        <Heading align="center" variant="h1">
          Register
        </Heading>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* name */}
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              name="name"
              value={user?.name}
              id="name"
              type="text"
              required
              placeholder="Enter name"
              onChange={handleChange}
            />
          </FormControl>
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
          {/* Role */}
          <FormControl>
            <Select value={role} label="User" onChange={handleRoleChange}>
              <MenuItem value="user">user</MenuItem>
              <MenuItem value="vendor">vendor</MenuItem>
            </Select>
          </FormControl>
          {error && <small>{errorMessage}</small>}
          <RegisterButton
            onClick={handleSubmit}
            disableElevation
            disableFocusRipple
            variant="contained"
          >
            Register
          </RegisterButton>
        </form>
        <small>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            href={"/login"}
          >
            Login
          </Link>
        </small>
      </FormGroup>
    </FormWrapper>
  );
};

export default page;
