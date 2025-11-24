import React, { useState, useRef, useEffect } from "react";
import { noAutorizado } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteDto } from "../../redux/reducers/userSlice";

function CustomUser() {
  const dispatch = useDispatch();
  const dtoUsuario = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const signOut = (e) => {
    e.preventDefault();
    dispatch(noAutorizado());
    dispatch(deleteDto());
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex items-center gap-3" ref={dropdownRef}>
      {dtoUsuario.userName && dtoUsuario.role && (
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-700">{dtoUsuario.userName}</p>
          <p className="text-xs text-gray-500 uppercase">{dtoUsuario.role}</p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none transition-transform active:scale-95"
      >
        <img
          src="./user.jpg"
          alt="User Profile"
          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm hover:shadow-md transition-shadow"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100 z-50 animate-fade-in-down">
          <a
            href="#profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
          >
            Perfil
          </a>
          <a
            href="#settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
          >
            Configuración
          </a>
          <div className="border-t border-gray-100 my-1"></div>
          <button
            onClick={signOut}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomUser;
