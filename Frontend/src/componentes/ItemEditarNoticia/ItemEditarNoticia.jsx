import React from 'react';

function ItemEditarNoticia() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="relative group cursor-pointer w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                <img
                  src="/icono-agregar-imagen.png"
                  alt="Agregar imagen"
                  className="w-24 h-24 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-600 transition-colors">Subir Imagen</span>
                <div className="absolute inset-0 bg-indigo-50/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            {/* Form Section */}
            <div className="w-full md:w-3/4 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="space-y-2">
                  <label htmlFor="formTitle" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Título</label>
                  <input
                    type="text"
                    id="formTitle"
                    placeholder="Ingrese un Título"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <label htmlFor="formStatus" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Estado</label>
                  <div className="relative">
                    <select
                      id="formStatus"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 appearance-none cursor-pointer"
                    >
                      <option>Seleccionar...</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label htmlFor="formCategory" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Categoría</label>
                  <div className="relative">
                    <select
                      id="formCategory"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 appearance-none cursor-pointer"
                    >
                      <option>Seleccionar...</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="formDate" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha Publicación</label>
                  <input
                    type="text"
                    id="formDate"
                    placeholder="06/09/2024"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="formDescription" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Descripción</label>
                <textarea
                  id="formDescription"
                  rows="4"
                  placeholder="Ingrese una Descripción detallada..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Career */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="formCareer" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Carrera</label>
                  <div className="relative">
                    <select
                      id="formCareer"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 appearance-none cursor-pointer"
                    >
                      <option>Seleccionar...</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-100 mt-8">
                <button className="px-8 py-3 rounded-xl text-sm font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                  Cancelar
                </button>
                <button className="px-8 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Actualizar Noticia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemEditarNoticia;
