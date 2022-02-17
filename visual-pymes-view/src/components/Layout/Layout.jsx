import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header.jsx";
import Footer from "../Home/Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
