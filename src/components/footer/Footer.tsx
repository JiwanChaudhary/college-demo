import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import styles from "@/components/navbar/NavbarDesktop.module.css";

// nav elements
const navElements = [
  { id: "home", value: "HOME" },
  { id: "contact", value: "CONTACT" },
  { id: "about", value: "ABOUT" },
];

const Footer = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        position: "sticky",
        bottom: "0",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "10px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/pro.png"
            alt="logo"
            height={60}
            width={100}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
          <div>
            {navElements.map((navElement) => (
              <>
                <Link
                  key={navElement.id}
                  className={styles.link}
                  href={navElement.id}
                >
                  {navElement.value}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* icons */}
          <div>
            <FacebookIcon style={{ color: "#4267B2", marginRight: "10px" }} />
            <InstagramIcon style={{ color: "#fa7e1e", marginRight: "10px" }} />
            <WhatsAppIcon style={{ color: "#25D366", marginRight: "10px" }} />
          </div>
          <div>CopyRight © 2023, Event Booking</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
