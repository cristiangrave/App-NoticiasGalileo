import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/reducers/contactSlice";
import axios from "axios";
import Swal from "sweetalert2";

const ItemCrearContacto = ({ onViewChange }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [puesto, setPuesto] = useState("");
  const [estado, setEstado] = useState("activo");

  const handleViewChange = (view) => {
    onViewChange(view);
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleCreateContact = async () => {
    if (name && email && phone && course && puesto) {
      const dataContact = {
        name: name,
        email: email,
        phone: phone,
        carrera: course,
        puesto: puesto,
        imagen: "imagen.png",
        estado: estado,
      };

      try {
        /*
        await axios.post("http://localhost:3001/contactosEstudiantes/", dataContact);
        */

        // Simulación de guardado
        await new Promise(resolve => setTimeout(resolve, 500));

        dispatch(addContact(dataContact));

        Toast.fire({
          icon: "success",
          title: "Contacto Guardado Correctamente (Simulado)",
        });

        // Limpiar campos
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setPuesto("");
        setEstado("activo");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Error al Crear Contacto",
        });
        console.error(error);
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "Por favor complete todos los campos requeridos",
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-4xl border border-gray-100">
        <div className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Crear Nuevo Contacto</h2>
          <p className="text-gray-500 text-sm">Complete la información del contacto académico.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sección de Imagen */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-colors cursor-pointer group">
              <div className="relative w-32 h-32 mb-2 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src="/icono-agregar-imagen.png"
                  alt="Agregar imagen"
                  className="w-16 h-16 opacity-50 group-hover:opacity-80"
                />
              </div>
              <span className="text-sm text-gray-500 font-medium group-hover:text-indigo-600">Subir Foto de Perfil</span>
              <input type="file" className="hidden" />
            </div>

            {/* Campos del Formulario */}
            <div className="md:col-span-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Ing. Juan Pérez"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Puesto</label>
                  <input
                    type="text"
                    value={puesto}
                    onChange={(e) => setPuesto(e.target.value)}
                    placeholder="Ej. Director de Carrera"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@galileo.edu"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="24238000"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Carrera</label>
                  <input
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="Ej. Ingeniería en Sistemas"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                  <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3 border-t pt-4">
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
              onClick={() => {
                setName("");
                setEmail("");
                setPhone("");
                setCourse("");
                setPuesto("");
                handleViewChange("contactos");
              }}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              onClick={handleCreateContact}
            >
              Guardar Contacto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemCrearContacto;
