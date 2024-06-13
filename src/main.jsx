import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import GoogleDrive from "./components/GoogleDrivePage/GoogleDrive.jsx";
import Mydrive from "./components/Sidebar Items/Mydrive.jsx";
import ComputerCom from "./components/Sidebar Items/ComputerCom.jsx";
import StarredComp from "./components/Sidebar Items/StarredComp.jsx";
import RecentCom from "./components/Sidebar Items/RecentCom.jsx";
import ShareWme from "./components/Sidebar Items/ShareWme.jsx";
import SpamCom from "./components/Sidebar Items/SpamCom.jsx";
import BinCom from "./components/Sidebar Items/BinCom.jsx";
import Storage from "./components/Sidebar Items/Storage.jsx";
import Header from "./components/GoogleDrivePage/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drive",
    element: <GoogleDrive />,
  },
  {
    path: "/mydrive",
    element: <Mydrive />,
  },
  {
    path: "/computer",
    element: <ComputerCom />,
  },
  {
    path: "/starred",
    element: <StarredComp />,
  },
  {
    path: "/recent",
    element: <RecentCom />,
  },
  {
    path: "/shared",
    element: <ShareWme />,
  },
  {
    path: "/spam",
    element: <SpamCom />,
  },
  {
    path: "/bin",
    element: <BinCom />,
  },
  {
    path: "/storage",
    element: <Storage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
