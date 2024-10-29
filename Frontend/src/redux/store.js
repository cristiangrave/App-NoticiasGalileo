import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/optionSlice";
import CreateSliceOP from "./reducers/createSlice";
import userSlice from "./reducers/userSlice";
import contactSlice from "./reducers/contactSlice";
import newsSlice from "./reducers/newsSlice";
import authSlice from "./reducers/authSlice";

export default configureStore({
  /* Aqui es donde se hace */
  reducer: {
    option: optionReducer,
    adminOption: CreateSliceOP,
    userSlice: userSlice,
    conctac: contactSlice,
    news: newsSlice,
    auth: authSlice,
    user: userSlice
  },
});