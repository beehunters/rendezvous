import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import EventDetail from "./pages/eventDetail";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,  // Layout 
      errorElement: <ErrorPage />, // Error boundary
      children: [
        {
          path: "/",  // Root path to render the Home component
          element: <Home />,
        },
        {
          path: "event/:id",  // Nested path for EventDetail
          element: <EventDetail />,
        },
        {
          path: "*", // Catch-all route for 404
          element: <NotFound />, // Render NotFound component
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
