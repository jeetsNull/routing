import React, { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Claim = lazy(() => import("../Pages/Claim"));
const Location = lazy(() => import("../Pages/Location"));
// const Location2 = lazy(() => import("../Pages/Location2"));
// const Location3 = lazy(() => import("../Pages/Location3"));
const House = lazy(() => import("../Pages/House"));
const House2 = lazy(() => import("../Pages/House2"));
const House3 = lazy(() => import("../Pages/House3"));
const Pages404 = lazy(() => import("../Pages/Page404"));

const Routing = [
  { path: "/dashboard", name: "Dashboard", exact: true, element: Dashboard, subChild:false },
  { path: "/claim", name: "Claim", exact: true, element: Claim, subChild:false, },
  { path: "/location", name: "Location", exact: true, element: Location, subChild:true,},
  { path: "/house",  name: "House",  exact: true,  element: House, subChild:true,},
  { path: "/page404", name: "Pages404", exact: true, element: Pages404, subChild:false },
  
];

export default Routing;
