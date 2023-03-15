import React from "react";
import { Routes, Route } from "react-router-dom";
import Routing from "../routes/Routing"

const LayoutRouting = () => {
  //  console.log("fsjhjhds")
  return (
    <>
      <Routes>
        {Routing &&
          Routing.map((route, idx) => {
            console.log(route);
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                 // subelement={route.submenu.map((item, id)=>{<item.element/>})}
                  element={route?.submenu?.map((item, id)=>{<item.element />})}
                 // element={<route.element/>}

                 
                  
                />
              )
            );
          })}
      </Routes>
    </>
  );
};

export default LayoutRouting;
