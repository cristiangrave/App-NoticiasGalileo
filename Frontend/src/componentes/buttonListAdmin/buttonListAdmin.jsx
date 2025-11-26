import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faNewspaper, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ButtonsListAdmin = ({ onViewChange, crearItem }) => {
  const tipoUsuario = useSelector((state) => state.user.role);
  const [activeView, setActiveView] = useState("noticias");

  const handleViewChange = (view) => {
    setActiveView(view);
    onViewChange(view);
  };

  return (
    <>
      <div className="sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 border-b border-gray-200 mb-6 rounded-b-lg">
        <div className="container mx-2 px-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* View Switcher (Segmented Control) */}
            <div className="bg-gray-50 p-2 rounded-xl shadow-sm border border-gray-200 inline-flex">
              <button
                onClick={() => handleViewChange("noticias")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeView === "noticias"
                  ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                <FontAwesomeIcon icon={faNewspaper} />
                Noticias
              </button>
              <button
                onClick={() => handleViewChange("contactos")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeView === "contactos"
                  ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                <FontAwesomeIcon icon={faAddressBook} />
                Contactos
              </button>
            </div>

            {/* Desktop Action Button */}
            {tipoUsuario === "admin" && (
              <button
                onClick={() => crearItem()}
                className="hidden sm:flex group items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>
                  Crear {activeView === "noticias" ? "Noticia" : "Contacto"}
                </span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="transition-transform group-hover:rotate-90"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Floating Action Button (FAB) */}
      {tipoUsuario === "admin" && (
        <button
          onClick={() => crearItem()}
          className="sm:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-indigo-700 hover:scale-110 transition-all duration-300"
          aria-label="Crear Nuevo"
        >
          <FontAwesomeIcon icon={faCirclePlus} className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default ButtonsListAdmin;
