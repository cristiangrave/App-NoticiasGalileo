import React from "react";
import { Image, Dropdown } from "react-bootstrap";

function CustomUser() {
  return (
    <Dropdown drop="start">
      <Dropdown.Toggle
        as={Image}
        src="./user.jpg"
        style={{ maxHeight: "50px" }}
        roundedCircle
      />
      <Dropdown.Menu>
        <Dropdown.Item href="#action/3.1">Perfil</Dropdown.Item>
        <Dropdown.Item href="#action/3.2">Configuración</Dropdown.Item>
        <Dropdown.Item href="#action/3.3">Salir</Dropdown.Item>
        <Dropdown.Item href="#action/3.3">Admin</Dropdown.Item>
        <Dropdown.Item href="#action/3.3">Estudiante</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomUser;
