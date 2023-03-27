import React from "react";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../../Submenu/submenu";

const House = () => {
  return (
    <div className="h-100">
        
        main House
        <div>
          <Link to="House-sub2"> House Sub 2 </Link>
          <Link to="House-sub3"> House Sub 3 </Link>
          <Outlet />
        </div>
    </div>
  );
};

export default House;