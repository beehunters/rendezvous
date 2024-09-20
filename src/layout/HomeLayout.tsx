import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Box component={"main"} sx={{minHeight:"100vh"}} >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
