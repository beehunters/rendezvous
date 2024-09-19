import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import EventDetail from "./pages/eventDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,  // Layout should only include the layout element
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",  // Root path to render the Home component
          element: <Home />,
        },
        {
          path: "event/:id",  // Nested path for EventDetail
          element: <EventDetail />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
