import React from "react";
import Nav from "react-bootstrap/Nav";

const NavMenu = () => {
  return (
    <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Registrar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Crear anuncio</Nav.Link>
        </Nav.Item>
    </Nav>
  );
};

export default NavMenu;