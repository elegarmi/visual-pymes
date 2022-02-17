import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <Nav activeKey="/">
      <Nav.Item>
        <Link to="/" class="nav-link">Inicio</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/register" class="nav-link">Registrar</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/create" class="nav-link">Crear anuncio</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;