import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { autorizar } from "../../redux/reducers/authSlice";
import { setUser, setUserRole } from "../../redux/reducers/userSlice";
import Swal from "sweetalert2";
import "./LoginForm.css";

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
    try {
      // DUMMY LOGIN
      console.log("Intentando login con:", username, password);
      await new Promise(resolve => setTimeout(resolve, 500));

      const access_token = "dummy_token_123456";
      const dummyUser = {
        username: username || "UsuarioDemo",
        rol: "admin"
      };

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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Mesh Gradient Background */}
      <div className="login-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Glassmorphism card */}
      <div className="backdrop-blur-2xl bg-white/5 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-xl border border-white/10 transform transition-all duration-500 hover:scale-[1.01] animate-fade-in relative z-10">
        {/* Logo and header */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mb-6 shadow-lg ring-1 ring-white/20">
            <img
              src="/logo-noslogan.png"
              alt="Logo Universidad Galileo"
              className="h-20 w-auto object-contain drop-shadow-md"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
            Bienvenido
          </h2>
          <p className="text-blue-100/80 text-base md:text-lg font-light">
            Inicia sesión para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-8">
          {/* Username field */}
          <div className="group">
            <label htmlFor="username" className="block text-sm font-medium text-blue-100/90 mb-2 ml-1">
              Usuario
            </label>
            <div className="relative transition-all duration-300 transform group-focus-within:-translate-y-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-200/60 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="username"
                type="text"
                placeholder="usuario@galileo.edu"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white text-base placeholder-blue-200/30 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="group">
            <label htmlFor="password" className="block text-sm font-medium text-blue-100/90 mb-2 ml-1">
              Contraseña
            </label>
            <div className="relative transition-all duration-300 transform group-focus-within:-translate-y-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-200/60 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white text-base placeholder-blue-200/30 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 hover:from-blue-500 hover:to-indigo-500 transform hover:-translate-y-0.5 transition-all duration-300 text-lg border border-white/10"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-blue-200/40 font-light tracking-wide">
            © 2024 UNIVERSIDAD GALILEO. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
