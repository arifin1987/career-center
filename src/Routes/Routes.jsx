import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Statistics from "../components/Statistics";
import AppliedJobs from "../components/AppliedJobs";
import Blog from "../components/Blog";
import DetailsJob from "../components/DetailsJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/featured/:jobId",
        element: <DetailsJob />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
