import React from "react";
import "./LoginForm.css";
import { Form } from "react-bootstrap";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <Form action="">
        <img
          id="logoUniversidad"
          src="/logo-noslogan.png"
          alt="logo universidad galileo"
        />
        <div className="input-box">
          <label id="label-correo" htmlFor="text">
            Correo
          </label>
          <input type="text" placeholder="Ingrese correo" required />
        </div>
        <div className="input-box">
          <label id="label-password" htmlFor="password">
            Contraseña
          </label>
          <input type="password" placeholder="Ingrese contraseña" required />
        </div>
        <button id="boton-sign-in" type="submit">
          Sign In
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
