import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme.ts";
import axios from "axios";
import { SWRConfig } from "swr";
import init from "./config/_config.ts";
const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log("fetcher", res)
  return res.data; // Use axios and return res.data directly
};
init()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SWRConfig
      value={{
        fetcher,
        onError: (error) => {
          console.error("Error fetching data:", error);
        },
        revalidateOnFocus: false, 
        shouldRetryOnError: true, 
      }}
    >

      <App />
    </SWRConfig>
    </ThemeProvider>
  </StrictMode>
);
