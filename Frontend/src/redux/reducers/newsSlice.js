import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  /* Este data almacena los datos que nesesitamos a su ves lo vamos a ir modificando conforme nesesitemos */
  initialState: { data: [] },
  reducers: {
    addNews: (state, action) => {
      state.data.push(action.payload);
    },


    readNews: (state, action) => {
      state.data = action.payload;
    },
    updateNew: (state, action) => {
      const { id, titulo, descripcion, carrera, imagen, fecha } =
        action.payload;
      /* aqui se espera el objeto que vamos a destructurar */
      const noticias = state.data.find((noticia) => noticia.id === id);
      if (noticias) {
        /* si se encuentra el objeto entonces insertamos los datos dentro de el arreglo
         */
        noticias.titulo = titulo;
        noticias.descripcion = descripcion;
        noticias.carrera = carrera;
        noticias.imagen = imagen;
        noticias.fecha = fecha;
      }
    },
  },
});

export const { addNews, readNews, updateNew } = newsSlice.actions;


export default newsSlice.reducer;
