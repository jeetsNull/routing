import React, { lazy } from "react";

const Location2 = lazy(() => import("../Pages/Location2"));
const Location3 = lazy(() => import("../Pages/Location3"));
const House2 = lazy(() => import("../Pages/House2"));
const House3 = lazy(() => import("../Pages/House3"));

const SubRouting = [
  { path: "location-sub2", name: "Loc Sub2", exact: true, element: Location2, parent:"Location"},
  { path: "location-sub3", name: "Loc Sub3", exact: true, element: Location3, parent:"Location" },
  { path: "House-sub2", name: "House Sub2", exact: true, element: House2, parent:"House"},
  { path: "House-sub3", name: "House Sub3", exact: true, element: House3, parent:"House"}
];

export default SubRouting;
