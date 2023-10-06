"use client";

import axios from "axios";
import * as React from "react";

const AllUsers = () => {
  const [allUser, setAllUser] = React.useState<any>([]);

  // get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`/api/admin`);
    //   console.log(response.data.data.users);
      setAllUser(response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>There are total {allUser.length} registed users</h1>
      <hr
        style={{
          margin: "10px",
          height: "2px",
          color: "#000",
          background: "#000",
        }}
      />
      <div>
        {allUser.map((user: any) => (
          <>
            <div key={user._id} style={{ textAlign: "left" }}>
              {/* name */}
              <p>
                <span style={{ fontWeight: "bold" }}>Name: </span>
                {user.name}
              </p>
              {/* email */}
              <p>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                {user.email}
              </p>
              {/* role */}
              <p>
                <span style={{ fontWeight: "bold" }}>Role: </span>
                {user.role}
              </p>
              {/* isVerified */}
              <p>
                <span style={{ fontWeight: "bold" }}>IsVerified: </span>
                {user.isVerified ? "true" : "false"}
              </p>
            </div>
            <hr
              style={{
                margin: "10px",
                height: "2px",
                color: "#000",
                background: "#000",
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
