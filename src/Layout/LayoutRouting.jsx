import React from "react";
import { Routes, Route } from "react-router-dom";
import Routing from "../routes/Routing"
import SubRouting from "../routes/SubRouting";

const LayoutRouting = () => {
  //  console.log("fsjhjhds")
  return (
    <>
      <Routes>
        {Routing &&
          Routing.map((route, idx) => {
            // console.log(idx);
            return (
              route.element && (
                <>
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  >

                    {route?.subChild === true ? (
                      <>
                        {SubRouting.map((item, index) => {
                          if (route.name == item.parent) {
                            // console.log("----------", index)
                            return (
                              item?.element && (
                                <Route
                                  key={item.name}
                                  path={item.path}
                                  exact={item.exact}
                                  name={item.name}
                                  element={<item.element />}
                                />
                              )
                            )
                          }
                        })}
                      </>
                    ) : ""}


                  </Route>


                </>
              )
            );
          })}
      </Routes>
    </>
  );
};

export default LayoutRouting;
