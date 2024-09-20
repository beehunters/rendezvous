import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import EventDetail from "./pages/eventDetail/EventDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="event" element={<EventDetail />} /> 
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Route>
        <Route path="*" element={<ErrorPage />} /> {/* Global error page */}
      </Routes>
    </Router>
  );
}

export default App;
