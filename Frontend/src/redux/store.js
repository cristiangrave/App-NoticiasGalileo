import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/optionSlice";
import userSlice from "./reducers/userSlice";
import contactSlice from "./reducers/contactSlice";
import newsSlice from "./reducers/newsSlice";
import authSlice from "./reducers/authSlice";

export default configureStore({
  /* Aqui es donde se hace */
  reducer: {
    conctac: contactSlice,
    news: newsSlice,
    auth: authSlice,
    user: userSlice,
  },
});
