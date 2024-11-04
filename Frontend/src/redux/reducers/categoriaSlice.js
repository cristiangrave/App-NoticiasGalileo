import { createSlice } from "@reduxjs/toolkit";

export const categoriaSlice = createSlice({
  name: "categoria",
  /* Este arreglo de estado nos va servir para poder almacenar la respuesta de nuestro end point categorias */
  initialState: { data: [] },
  reducers: {
    readCategoria: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { readCategoria } = categoriaSlice.actions;

export default categoriaSlice.reducer;
