import React from "react";
import { Outlet } from "react-router-dom";
import ManNavigation from "./MainNavigation";
import classes from "./root.module.css";
const RootLayout = () => {
  return (
    <>
      <ManNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
