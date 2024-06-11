import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import GoogleDrive from "./components/GoogleDrivePage/GoogleDrive.jsx";

// function App() {
//   return (
//     <>
//       <Home />
//       {/* <Outlet /> */}
//     </>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drive",
    element: <GoogleDrive />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
