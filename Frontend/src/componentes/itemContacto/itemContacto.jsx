import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { readContact, updateContact } from "../../redux/reducers/contactSlice";
import Swal from "sweetalert2";

const DUMMY_CONTACTS = [
  {
    id: 1,
    name: "Ing. Juan Pérez",
    email: "jperez@galileo.edu",
    phone: "24238000",
    carrera: "Ingeniería en Sistemas",
    puesto: "Director de Carrera",
    imagen: "user.jpg",
    estado: "activo",
  },
  {
    id: 2,
    name: "Licda. María López",
    email: "mlopez@galileo.edu",
    phone: "24238001",
    carrera: "Administración de Empresas",
    puesto: "Secretaria Académica",
    imagen: "user.jpg",
    estado: "activo",
  },
  {
    id: 3,
    name: "Dr. Carlos Ruiz",
    email: "cruiz@galileo.edu",
    phone: "24238002",
    carrera: "Ingeniería Electrónica",
    puesto: "Catedrático Titular",
    imagen: "user.jpg",
    estado: "activo",
  },
];

const ItemContacto = ({ userProp }) => {
  const allContacts = useSelector((state) => state.conctac);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editContact, setEditedProduct] = useState(null);
  const dispatch = useDispatch();
  const tipoUsuario = useSelector((state) => state.user.role);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Intentar llamar al backend
        // const res = await axios.get("http://localhost:3001/contactosEstudiantes");
        // dispatch(readContact(res.data.data));

        // Usar dummy data por ahora
        throw new Error("Backend no disponible, usando datos de prueba");
      } catch (err) {
        console.log("Usando datos dummy para contactos:", err.message);
        dispatch(readContact(DUMMY_CONTACTS));
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
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

  const handleClickEditContaco = async () => {
    try {
      /*
      await axios.put(`http://localhost:3001/contactosEstudiantes/${editContact.id}`, {
        ...editContact
      });
      */

      await new Promise(resolve => setTimeout(resolve, 500));

      dispatch(
        updateContact({
          ...editContact,
          imagen: "imagen.png",
        })
      );
      setEditedProduct(null);

      Toast.fire({
        icon: "success",
        title: "Contacto Editado Correctamente",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Ocurrió un Error al editar",
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

  if (error) {
    return <div className="p-4 text-red-600 bg-red-50 rounded-lg">Error Contactos : {error} </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
      {allContacts.data && allContacts.data.map((contacto) => (
        <div key={contacto.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
          {editContact?.id === contacto.id ? (
            // FORMULARIO DE EDICIÓN
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500">
                  <img src="/icono-agregar-imagen.png" alt="Upload" className="w-10 h-10 opacity-50" />
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <label className="text-xs font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    value={editContact.name}
                    onChange={(e) => setEditedProduct({ ...editContact, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                    placeholder="Nombre Contacto"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Puesto</label>
                  <input
                    type="text"
                    value={editContact.puesto}
                    onChange={(e) => setEditedProduct({ ...editContact, puesto: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                    placeholder="Puesto"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={editContact.email}
                    onChange={(e) => setEditedProduct({ ...editContact, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Teléfono</label>
                  <input
                    type="number"
                    value={editContact.phone}
                    onChange={(e) => setEditedProduct({ ...editContact, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                    placeholder="Teléfono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Carrera</label>
                  <input
                    type="text"
                    value={editContact.carrera}
                    onChange={(e) => setEditedProduct({ ...editContact, carrera: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                    placeholder="Carrera"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Estado</label>
                  <select
                    value={editContact.estado}
                    onChange={(e) => setEditedProduct({ ...editContact, estado: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white"
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setEditedProduct(null)}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleClickEditContaco}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
                >
                  Guardar
                </button>
              </div>
            </div>
          ) : (
            // VISTA DE TARJETA
            <>
              <div className="p-6 flex flex-col items-center text-center border-b border-gray-50 bg-gradient-to-b from-white to-gray-50/50">
                <div className="relative mb-4">
                  <img
                    src="/user.jpg"
                    alt={contacto.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + contacto.name + "&background=random" }}
                  />
                  <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${contacto.estado === 'activo' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{contacto.name}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-2">{contacto.puesto}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {contacto.carrera}
                </span>
              </div>

              <div className="p-6 bg-white flex-1 flex flex-col justify-center space-y-3">
                <div className="flex items-center text-sm text-gray-600 group hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{contacto.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 group hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{contacto.phone}</span>
                </div>
              </div>

              {tipoUsuario === "admin" && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setEditedProduct(contacto)}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                  >
                    Editar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemContacto;
