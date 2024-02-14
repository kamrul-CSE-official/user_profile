import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Friends from "../pages/Friends";
import Photos from "../pages/Photos";
import Videos from "../pages/Videos";
import CheckIns from "../pages/CheckIns";
import Post from "../pages/Post";
import PageNotFound from "../pages/PageNotFound";
import MainLayout from "../Layouts/MainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/check-ins",
        element: <CheckIns />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routers;
