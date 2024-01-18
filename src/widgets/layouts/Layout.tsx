import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../main/nav/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
