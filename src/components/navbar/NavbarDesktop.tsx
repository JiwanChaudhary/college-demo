import { Colors } from "@/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./NavbarDesktop.module.css";
import User from "./User";

// nav elements
const navElements = [
  { id: "home", value: "HOME" },
  { id: "contact", value: "CONTACT" },
  { id: "about", value: "ABOUT" },
];

const NavbarDesktop = () => {
  // const handleNavItem = () => {

  // }

  return (
    <div
      style={{
        background: Colors.black,
        color: Colors.white,
        padding: "10px 60px",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        // overflow: "hidden",
        // width: "100%",
        // marginBottom: "600px",

      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src="/images/pro.png"
            alt="logo"
            height={60}
            width={100}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* search by venue */}
        <div
          style={{
            zIndex: 100,
            textAlign: "center",
          }}
        >
          <input
            type="text"
            id="location"
            placeholder="search venue"
            style={{ padding: "8px" }}
          />
        </div>
        <div>
          {navElements.map((navElement) => (
            <>
              <Link
                key={navElement.id}
                className={styles.link}
                // className={styles.link === navElement.id ? 'active' : ""}
                // onClick={() => handleNavItem(navElement.id)}
                href={navElement.id}
              >
                {navElement.value}
              </Link>
            </>
          ))}
        </div>

        <User />
      </div>
    </div>
  );
};

export default NavbarDesktop;
