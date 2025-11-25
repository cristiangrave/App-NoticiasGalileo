import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { autorizar } from "../../redux/reducers/authSlice";
import { setUser, setUserRole } from "../../redux/reducers/userSlice";
import Swal from "sweetalert2";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 p-6">
      {/* Starfield background */}
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Glassmorphism card */}
      <div className="backdrop-blur-xl bg-white/10 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02] animate-fade-in relative z-10">
        {/* Logo and header */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl mb-6 transform transition-transform duration-300 hover:rotate-6">
            <img
              src="/logo-noslogan.png"
              alt="Logo Universidad Galileo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Bienvenido
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            Inicia sesión para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-8">
          {/* Username field */}
          <div className="group">
            <label htmlFor="username" className="block text-base font-semibold text-white/90 mb-3">
              Usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-base placeholder-white/50 focus:border-white focus:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="group">
            <label htmlFor="password" className="block text-base font-semibold text-white/90 mb-3">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-white/60 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-base placeholder-white/50 focus:border-white focus:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-8 bg-white text-blue-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/95 transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/60">
            © 2024 Universidad Galileo. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <style jsx>{`
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 3s ease-in-out infinite;
        }

        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 40px 60px, white, transparent),
            radial-gradient(1px 1px at 110px 90px, white, transparent),
            radial-gradient(1px 1px at 150px 30px, white, transparent),
            radial-gradient(2px 2px at 70px 120px, white, transparent);
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: twinkle 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 80px 10px, white, transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1px 1px at 30px 80px, white, transparent),
            radial-gradient(2px 2px at 120px 50px, white, transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: twinkle 5s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
