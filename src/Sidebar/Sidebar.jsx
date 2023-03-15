import React from "react";
import { Link, useLocation } from "react-router-dom";
import Routing from "../routes/Routing";
import SubMenu from "../Submenu/submenu";


const Sidebar = ({handleExpandMenu}) => {
  return (
      <div id="sidebar-menu">
        <ul>
          {Routing &&
            Routing.map((item, id) => {
              // console.log("----",item);
              return (
                item.element && (
                  <li>
                    <Link to={item.path} style={{ textDecoration: "none" }}>{item.name}</Link>
                    {item.submenu ? <SubMenu submenu={item.submenu} /> : ""}
                  </li>
                )
              );
            })}

        </ul>
      </div>
  );
};

export default Sidebar;
