import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./features/auth/useProtectRoute";
import Dashboard from "./components/dashnoard.jsx/Dashboard";
import useAuthListener from "./features/auth/useAuthListener";




function App() {
  const auth = useAuthListener();
  const { isLoading} = auth;
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/dashboard",
          element: <ProtectedRoute auth={auth}><Dashboard /></ProtectedRoute>
        }
      ]
    }
  ]);

  return (
    <div className="font-roboto max-w-[1400px] m-auto">
      {/* {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner"></div>
        </div>
      ) : ( */}
        <RouterProvider router={router} />
      {/* )} */}
    </div>
  );
}

export default App;
