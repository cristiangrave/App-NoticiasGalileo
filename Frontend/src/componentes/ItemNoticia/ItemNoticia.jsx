import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { readNews, updateNew } from "../../redux/reducers/newsSlice";
import Swal from "sweetalert2";

const DUMMY_NOTICIAS = [
  {
    id: 1,
    titulo: "Inscripciones Abiertas 2025",
    descripcion: "El proceso de inscripción para el ciclo 2025 ya está disponible. Acércate a secretaría para más información.",
    carrera: "Ingeniería en Sistemas",
    imagen: "imagen-noticia.png",
    fecha: "2024-11-20",
    estado: "activo",
  },
  {
    id: 2,
    titulo: "Conferencia de Inteligencia Artificial",
    descripcion: "No te pierdas la conferencia magistral sobre el futuro de la IA generativa impartida por expertos de Google.",
    carrera: "Ciencias de la Computación",
    imagen: "imagen-noticia.png",
    fecha: "2024-11-22",
    estado: "activo",
  },
  {
    id: 3,
    titulo: "Feria de Empleo Tecnológico",
    descripcion: "Más de 20 empresas estarán reclutando talento este fin de semana en el campus central.",
    carrera: "Todas",
    imagen: "imagen-noticia.png",
    fecha: "2024-11-25",
    estado: "activo",
  },
];

const ItemNoticia = () => {
  const noticias = useSelector((state) => state.news);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editNews, setEditNews] = useState(null);
  const dispatch = useDispatch();
  const tipoUsuario = useSelector((state) => state.user.role);

  useEffect(() => {
    // Simulación de fetch con datos dummy si falla el backend
    const fetchNews = async () => {
      try {
        // Intentar llamar al backend
        // const response = await axios.get("http://localhost:3001/noticiasEstudiantes");
        // dispatch(readNews(response.data.data));

        // Usar dummy data por ahora
        throw new Error("Backend no disponible, usando datos de prueba");
      } catch (err) {
        console.log("Usando datos dummy:", err.message);
        dispatch(readNews(DUMMY_NOTICIAS));
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [dispatch]);

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

  const handleUpdateNew = async () => {
    try {
      // Simulación de update
      /*
      await axios.put(`http://localhost:3001/noticiasEstudiantes/${editNews.id}`, {
        ...editNews
      });
      */

      await new Promise(resolve => setTimeout(resolve, 500));

      dispatch(updateNew(editNews));
      setEditNews(null);

      Toast.fire({
        icon: "success",
        title: "Noticia Editada Correctamente",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Ocurrió un error al editar",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto">
      {noticias.data && noticias.data.map((noticia) => (
        <div
          key={noticia.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
        >
          {editNews?.id === noticia.id ? (
            // FORMULARIO DE EDICIÓN
            <div className="p-6 bg-gray-50">
              <div className="mb-4 border-b pb-2">
                <h3 className="text-lg font-bold text-gray-800">Editar Noticia</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Imagen */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <img src="/icono-agregar-imagen.png" alt="Upload" className="w-12 h-12 opacity-50" />
                  </div>
                  <span className="text-xs text-gray-500">Cambiar Imagen</span>
                </div>

                {/* Campos */}
                <div className="md:col-span-8 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Título</label>
                      <input
                        type="text"
                        value={editNews.titulo}
                        onChange={(e) => setEditNews({ ...editNews, titulo: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Estado</label>
                      <select
                        value={editNews.estado}
                        onChange={(e) => setEditNews({ ...editNews, estado: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                      >
                        <option value="activo">Activo</option>
                        <option value="inactivo">No Activo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Carrera</label>
                      <select
                        value={editNews.carrera}
                        onChange={(e) => setEditNews({ ...editNews, carrera: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                      >
                        <option>Ingeniería en Sistemas</option>
                        <option>Ciencias de la Computación</option>
                        <option>Todas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Fecha</label>
                      <input
                        type="date"
                        value={editNews.fecha}
                        onChange={(e) => setEditNews({ ...editNews, fecha: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-gray-100"
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Descripción</label>
                    <textarea
                      rows={3}
                      value={editNews.descripcion}
                      onChange={(e) => setEditNews({ ...editNews, descripcion: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => setEditNews(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleUpdateNew}
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // VISTA DE TARJETA MODERNA
            <div className="flex flex-col md:flex-row h-full">
              {/* Imagen con efecto zoom */}
              <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src="imagen-noticia.png"
                  alt="Noticia"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Noticia" }}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-600 shadow-sm">
                    {noticia.carrera}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between bg-white relative">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {noticia.fecha}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors cursor-pointer">
                    {noticia.titulo}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {noticia.descripcion}
                  </p>
                </div>

                {tipoUsuario === "admin" && (
                  <div className="flex justify-end pt-6 mt-2">
                    <button
                      onClick={() => setEditNews(noticia)}
                      className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all duration-200"
                    >
                      Editar
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemNoticia;
