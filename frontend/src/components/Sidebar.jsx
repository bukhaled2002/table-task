import React from "react";
import { NavLink } from "react-router-dom";
import { CiHome, CiViewTable } from "react-icons/ci";
function Sidebar() {
  return (
    <ul className="flex flex-col px-4 justify-center border-r-[1px] border-amber-300 gap-1">
      <NavLink
        to={"/home"}
        className={({ isActive }) =>
          `p-2 rounded-lg transition-colors duration-700 ease-in-out ${
            isActive
              ? "bg-amber-500 text-white"
              : "hover:bg-amber-500 hover:text-white"
          }`
        }
      >
        <CiHome className="text-3xl" />
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `p-2 rounded-lg  transition-colors duration-700 ease-in-out ${
            isActive
              ? "bg-amber-500 text-white"
              : "hover:bg-amber-500 hover:text-white"
          }`
        }
      >
        <CiViewTable className="text-3xl" />
      </NavLink>
    </ul>
  );
}

export default Sidebar;
