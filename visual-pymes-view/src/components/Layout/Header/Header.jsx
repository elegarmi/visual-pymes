import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo.png";
import NavMenu from "./NavMenu/NavMenu";
import Searchbar from "./Searchbar/Searchbar";

import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand navbar-light justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            alt="Visual Pymes logo"
            src={Logo}
            className="d-inline-block align-top"
          />{' '}
        Visual Pymes
        </Navbar.Brand>
        <div id="header__navigation">
          <NavMenu />
          <Searchbar />
        </div>
    </Navbar>
  );
};

export default Header;