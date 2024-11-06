import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import contactSlice from "./reducers/contactSlice";
import newsSlice from "./reducers/newsSlice";
import authSlice from "./reducers/authSlice";
import categoriaSlice from "./reducers/categoriaSlice";
import carreraSlice from "./reducers/carreraSlice";

export default configureStore({
  /* Aqui es donde se hace */
  reducer: {
    conctac: contactSlice,
    news: newsSlice,
    auth: authSlice,
    user: userSlice,
    categoria: categoriaSlice,
    carrera: carreraSlice,
  },
});
