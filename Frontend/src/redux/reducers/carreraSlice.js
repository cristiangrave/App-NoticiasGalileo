import { createSlice } from "@reduxjs/toolkit";

export const carreraSlice = createSlice({
  name: "categoria",
  /* Este arreglo de estado nos va servir para poder almacenar la respuesta de nuestro end point categorias */
  initialState: { data: [] },
  reducers: {
    readCarrera: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { readCarrera } = carreraSlice.actions;

export default carreraSlice.reducer;
