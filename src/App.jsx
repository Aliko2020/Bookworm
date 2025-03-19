import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./features/auth/useProtectRoute";
import Dashboard from "./components/dashnoard.jsx/Dashboard";
import useAuthListener from "./features/auth/useAuthListener";
import { GetStartedModel } from "./components/getStarted/GetStartedModel";
import { useState, useEffect } from "react";
import DashboardHome from "./components/dashnoard.jsx/DashboardHome";
import ReadNext from "./components/dashnoard.jsx/ReadNext";
import Favorites from "./components/dashnoard.jsx/Favorites";


function App() {
  const auth = useAuthListener();
  const [showGetStartedModel, setShowGetStartedModel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGetStartedModel(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowGetStartedModel(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute auth={auth}>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "",
              element: <DashboardHome />
            },
            {
              path: "favorites",
              element: <Favorites />
            },
            {
              path: "nextread",
              element: <ReadNext />
            }
          ]
        },
      ],
    },
  ]);

  return (
    <div className="font-roboto max-w-[1780px] m-auto">
      {auth.isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
      {showGetStartedModel && <GetStartedModel onClose={handleClose} />}
    </div>
  );
}

export default App;
