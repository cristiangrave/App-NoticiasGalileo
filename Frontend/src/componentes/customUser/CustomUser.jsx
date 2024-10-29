import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import { noAutorizado } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {deleteDto} from "../../redux/reducers/userSlice"
function CustomUser() {

  const usar = useDispatch()
  const dtoUsuario = useSelector((state) => state.userSlice)

  const signOut = (e) => {
    e.preventDefault()
    usar(noAutorizado())
    usar(deleteDto())
    
  }

  return (
    <Dropdown drop="start">

      {
        dtoUsuario.userName && dtoUsuario.role && (
          <label>{dtoUsuario.userName+" | "+dtoUsuario.role}</label>
        )
      }
      <Dropdown.Toggle
        as={Image}
        src="./user.jpg"
        style={{ maxHeight: "50px" }}
        roundedCircle
      />
      <Dropdown.Menu>
        <Dropdown.Item href="#action/3.1">Perfil</Dropdown.Item>
        <Dropdown.Item href="#action/3.2">Configuración</Dropdown.Item>
        <Dropdown.Item href="#action/3.3" onClick={signOut}>Salir</Dropdown.Item>
        <Dropdown.Item href="#action/3.3">Admin</Dropdown.Item>
        <Dropdown.Item href="#action/3.3">Estudiante</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomUser;
