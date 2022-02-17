import React from "react";
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
        <Link to="/">Inicio</Link>

        {/* <Link eventKey="link-1">Registrar</Link> */}

        <Link to="/create">Crear anuncio</Link>
    </div>
  );
};

export default NavMenu;