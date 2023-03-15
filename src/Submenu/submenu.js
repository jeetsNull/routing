import React, {useState, useEffect, useRef, useCallback } from "react";

//Import Scrollbar

import { Link, useLocation } from "react-router-dom";
// MetisMenu

const SubMenu = ({submenu}) => {

  
  return (
    <>
      <div>
        <ul className="" >
            {submenu &&
            submenu.map((item, id) => {
            console.log("18",item);
                return (
                  item.element && (
                    <li>
                      <Link to={item.path} style={{ textDecoration: "none" }}>{item.name}</Link>
                    </li>
                  )
                );
            })}
        </ul>
      </div>
      {/* </SimpleBar> */}
    </>
  );
};

export default SubMenu;
