import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/optionSlice";
import CreateSliceOP from "./reducers/createSlice";
import userSlice from "./reducers/userSlice";
import contactSlice from "./reducers/contactSlice";

export default configureStore({
  reducer: {
    option: optionReducer,
    adminOption: CreateSliceOP,
    userSlice: userSlice,
    conctac: contactSlice,
  },
});
