import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import EventDetail from './pages/eventDetail';
import HomeLayout from './layout/HomeLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomeLayout>
            <Home />
          </HomeLayout>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "event/:id",
          element: <EventDetail />,
        },
      ],
    },
  ]);
  return (
    <>
        <RouterProvider router={router} />

    </>
  )
}

export default App
