import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ]);

  return (
    <div className="font-roboto max-w-[1400px] m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
