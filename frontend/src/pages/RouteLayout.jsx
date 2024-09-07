import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

function RouteLayout() {
  return (
    <div className="p-0 flex h-[100vh] ">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default RouteLayout;
