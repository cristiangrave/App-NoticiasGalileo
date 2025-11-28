import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addNews } from "../../redux/reducers/newsSlice";
import axios from "axios";

const ItemCrearNoticia = ({ onViewChange }) => {
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [carrera, setCarrera] = useState("");
  const [estado, setEstado] = useState("activo");
  const [categoria, setCategoria] = useState("Categoria 1");
  const [imagenPreview, setImagenPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleViewChange = (view) => {
    onViewChange(view);
  };



  const dispatch = useDispatch();

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagenPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        Toast.fire({
          icon: "error",
          title: "Formato de imagen no válido. Solo PNG o JPEG.",
        });
      }
    }
  };

  const handleGuardarNoticia = async () => {
    if (fecha && titulo && descripcion && carrera) {
      const newNoticia = {
        titulo: titulo,
        descripcion: descripcion,
        carrera: carrera,
        imagen: "imagen.png", // Placeholder
        fecha: fecha,
        estado: estado,
        categoria: categoria,
      };

      console.log("Guardando noticia:", newNoticia);

      // Simulación de guardado (Dummy)
      // En producción, descomentar axios y quitar la simulación de éxito inmediato si se desea
      try {
        /*
        await axios.post("http://localhost:3001/noticiasEstudiantes/", newNoticia);
        */

        // Simulamos delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Simulamos éxito
        dispatch(addNews(newNoticia));

        Toast.fire({
          icon: "success",
          title: "Noticia Guardada Correctamente (Simulado)",
        });

        // Limpiar campos
        setTitulo("");
        setDescripcion("");
        setCarrera("");
        setEstado("activo");
        setImagenPreview(null);

      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "Error al Crear Noticia",
        });
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
          <h2 className="text-2xl font-bold text-gray-800">Crear Nueva Noticia</h2>
          <p className="text-gray-500 text-sm">Complete la información para publicar una nueva noticia.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div
              className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-colors cursor-pointer group"
              onClick={() => fileInputRef.current.click()}
            >
              <div className="relative w-full mb-2 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                {imagenPreview ? (
                  <img
                    src={imagenPreview}
                    alt="Vista previa"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/icono-agregar-imagen.png"
                    alt="Agregar imagen"
                    className="w-16 h-16 opacity-50 group-hover:opacity-80 cursor-pointer transition-opacity w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="text-sm text-gray-500 font-medium group-hover:text-indigo-600 hover:underline">
                {imagenPreview ? "Cambiar Imagen" : "Subir Imagen"}
              </span>
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
            {/* Campos del Formulario */}
            <div className="md:col-span-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título Noticia</label>
                  <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ingrese un Título"
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
                    <option value="inactivo">No Activo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                  >
                    <option>Categoria 1</option>
                    <option>Categoria 2</option>
                    <option>Categoria 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Publicación</label>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Ingrese una Descripción detallada..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Carrera</label>
                <select
                  value={carrera}
                  onChange={(e) => setCarrera(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                >
                  <option value="">Seleccione una carrera</option>
                  <option value="Carrera 1">Carrera 1</option>
                  <option value="Carrera 2">Carrera 2</option>
                  <option value="Carrera 3">Carrera 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3 border-t pt-4">
            <button
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
              onClick={() => {
                setTitulo("");
                setDescripcion("");
                setCarrera("");
                setImagenPreview(null);
                handleViewChange("noticias");
              }}
            >
              Cancelar
            </button>
            <button
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              onClick={handleGuardarNoticia}
            >
              Guardar Noticia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemCrearNoticia;
