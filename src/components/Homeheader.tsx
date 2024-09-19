import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
import { Box } from "@mui/material";

export default function Homeheader() {
  return (
    <header >
      <div className={styles.header}>
      <Navbar />

      <Box style={{margin: 0, height: "100vh", display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"start", color:'white'}} >
        <h1>Welcome to the Event</h1>
        <p>Find the hottest events around the globe!</p>
      </Box>

      </div>
    </header>
  );
}
