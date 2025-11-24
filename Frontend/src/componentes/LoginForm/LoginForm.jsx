import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { autorizar } from "../../redux/reducers/authSlice";
import { setUser, setUserRole } from "../../redux/reducers/userSlice";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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

    // Simulación de Login (Dummy Data)
    // En un entorno real, descomentar la llamada a axios y eliminar la simulación
    try {
      /* 
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      const { access_token } = response.data;
      */

      // DUMMY LOGIN
      console.log("Intentando login con:", username, password);

      // Simulamos un pequeño delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Simulamos éxito siempre por ahora para desarrollo
      const access_token = "dummy_token_123456";
      const dummyUser = {
        username: username || "UsuarioDemo",
        rol: "admin" // Forzamos rol admin para probar todo
      };

      // Guardar el token en el estado y localStorage
      localStorage.setItem("token", access_token);

      if (access_token) {
        dispatch(autorizar());
        dispatch(setUserRole(dummyUser.rol));
        dispatch(setUser(dummyUser.username));

        Toast.fire({
          icon: "success",
          title: "¡Bienvenido!",
        });
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Usuario o Contraseña Erróneas",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="flex flex-col items-center mb-8 p-4">
          <img
            src="/logo-noslogan.png"
            alt="Logo Universidad Galileo"
            className="h-24 mb-4 object-contain"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Bienvenido</h2>
          <p className="text-gray-500 text-sm md:text-base">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-4">
          <div className="space-y-2">
            <label for="username" className="block text-sm font-medium text-gray-700 mb-1 font-semibold">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Ej. usuario@galileo.edu"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-3 focus:bg-teal-900 focus:border-teal-900 transition-all outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 font-semibold text-sm">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-3 focus:bg-teal-900 focus:border-teal-900 transition-all outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-galileo text-white font-semibold py-3 px-4 rounded-full shadow-md  rounded rounded-full "
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2024 Universidad Galileo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
