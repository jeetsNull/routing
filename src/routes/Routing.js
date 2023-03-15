import React, { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Claim = lazy(() => import("../Pages/Claim"));
const Location = lazy(() => import("../Pages/Location"));
const Location2 = lazy(() => import("../Pages/Location2"));
const Location3 = lazy(() => import("../Pages/Location3"));
const House = lazy(() => import("../Pages/House"));
const House2 = lazy(() => import("../Pages/House2"));
const House3 = lazy(() => import("../Pages/House3"));
const Pages404 = lazy(() => import("../Pages/Page404"));

const Routing = [
  { path: "/dashboard", name: "Dashboard", exact: true, element: Dashboard },
  { path: "/claim", name: "Claim", exact: true, element: Claim },
  {
    path: "/location",
    name: "Location",
    exact: true,
    element: Location,
    submenu: [
      {
        path: "location-sub2",
        name: "Loc Sub2",
        exact: true,
        element: Location2
      },
      {
        path: "location-sub3",
        name: "Loc Sub3",
        exact: true,
        element: Location3
      }
    ]
  },
  { 
    path: "/house", 
    name: "House", 
    exact: true, 
    element: House,
    submenu: [
      {
        path: "House-sub2",
        name: "House Sub2",
        exact: true,
        element: House2
      },
      {
        path: "House-sub3",
        name: "House Sub3",
        exact: true,
        element: House3
      }
    ]
 },
  { path: "/page404", name: "Pages404", exact: true, element: Pages404 },



];

export default Routing;
