import React from "react";
import { Link, useLocation } from "react-router-dom";
import Routing from "../routes/Routing";
import SubMenu from "../Submenu/submenu";


const Sidebar = ({handleExpandMenu}) => {
  return (
      <div id="sidebar-menu">
        <ul>
          {Routing &&
            Routing.map((item, index) => {
              // console.log("----",item);
              return (
                item.element && (
                  <li key={index}>
                    <Link  to={item.path} style={{ textDecoration: "none" }}>{item.name}</Link>
                  </li>
                )
              );
            })}

        </ul>
      </div>
  );
};

export default Sidebar;
