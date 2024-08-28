import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

function Layout() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Outlet/>
    </div>
  );
}

export default Layout;
