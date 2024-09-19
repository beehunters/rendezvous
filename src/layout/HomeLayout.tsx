import React from "react";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
