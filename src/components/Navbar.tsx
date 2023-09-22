import * as React from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

const Navbar = () => {
  let cookieStore = cookies();
  let token, decodedToken;
  token = cookieStore.get("token")?.value;
  decodedToken = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  const name = decodedToken.name;
  let firstName = name.split(" ")[0];

  return (
    <div>
      <p>Welcome, {firstName}</p>
    </div>
  );
};

export default Navbar;
