import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contac",
  initialState: { data: [] },
  reducers: {
    readContact: (state, action) => {
      state.data = action.payload;
    },
    addContact: (state, action) => {
      state.data.push(action.payload);
    },
    updateContact: (state, action) => {
      const { id, name, email, phone, carrera, puesto, imagen, estado } =
        action.payload;
      /* primero destructure(para poder manejar el mismo tipo de dato dentro de la data) luego busque dentro de la data luego comprobe si exites el contacto para poder meterlo dentro */
      const contact = state.data.find((producto) => producto.id === id);
      if (contact) {
        /* si contact si  tiene algo y logra encontrar algo dentro de el objeto de data entonces ahi metemos los datos dentro del objeto encontrado */
        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        contact.carrera = carrera;
        contact.puesto = puesto;
        contact.imagen = imagen;
        contact.estado = estado;
      }
    },
  },
});

export const { addContact, readContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
