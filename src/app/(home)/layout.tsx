"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <body>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </LocalizationProvider>
    </html>
  );
}
