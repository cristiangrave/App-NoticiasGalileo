import "./LoginForm.css";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { autorizar } from "../../redux/reducers/authSlice";
import { setUser, setUserRole } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var rol;
  var usuario;
  var tokenRecibido;
  const [token, setToken] = useState("");

  const usar = useDispatch();
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar credenciales al backend
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      const { access_token } = response.data;
      tokenRecibido = access_token;

      // Guardar el token en el estado y localStorage
      setToken(access_token);
      localStorage.setItem("token", access_token);

      console.log("Token recibido:", access_token);

      if (access_token) {
        usar(autorizar());
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Usuario o Contraseña Irroneas",
      });
    }

    try {
      const profile = await axios.get("http://localhost:3001/auth/profile", {
        headers: {
          Authorization: `Bearer ${tokenRecibido}`,
        },
      });

      rol = profile.data.rol;
      usuario = profile.data.username;
      usar(setUserRole(rol));
      usar(setUser(usuario));
      console.log(rol, usuario);
    } catch (error) {
      console.log("ningún rol encontrado");
      console.log(error);
    }
  };

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
            User
          </label>
          <input
            type="text"
            placeholder="Ingrese correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label id="label-password" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id="boton-sign-in" type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
