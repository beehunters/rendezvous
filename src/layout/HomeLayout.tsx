import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";


export default function HomeLayout() {
  return (
    <>
      <main>     <Outlet /></main>
      <Footer />
    </>
  );
}
