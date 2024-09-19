import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
import { Box, Typography } from "@mui/material";
import EventSearchBar from "./EventSearchBar";
interface HomeheaderProps {
  onSearch: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];  // New prop for categories
}
export default function Homeheader({ onSearch, category, setCategory, categories }: HomeheaderProps) {
  const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  return (
    <header>
      <div className={styles.header}>
        <Navbar />
        <Box
          sx={{
            margin: "300px auto 0",
            display: "flex",
            maxWidth: "80%",
            justifyContent: "justify-around",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              maxWidth: "500px",
              color: "white",
              fontWeight: "800",
            }}
          >
            Ready to Rock? Discover the Hottest Events Here – Your Calendar's
            New Best Friend!
          </Typography>

          <EventSearchBar onSearch={onSearch} category={category} categories={categories} setCategory={setCategory} />
          </Box>
      </div>
    </header>
  );
}
