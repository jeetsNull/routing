import React from "react";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../../Submenu/submenu";

const Location = () => {
  return (
    <div className="h-100">
        <SubMenu />
        Main Location
        <div>
          <Link to="location-sub2"> location Sub 2 </Link>
          <Link to="location-sub3"> location Sub 3 </Link>
          
          <Outlet />

        </div>
    </div>
  );
};

export default Location;