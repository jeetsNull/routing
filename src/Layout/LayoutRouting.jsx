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
                <>
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element/>}
                />
                {/* {route?.submenu?.map((item, id)=>{
                  console.log("----------",item)
                  return(
                    item?.submenu?.element && (
                      <Route
                      key={id}
                      path={item.path}
                      exact={item.exact}
                      name={item.name}
                      element={<item.element/>}
                    />
                    )
                  )
                })} */}
                
            
                </>
              )
            );
          })}
      </Routes>
    </>
  );
};

export default LayoutRouting;
