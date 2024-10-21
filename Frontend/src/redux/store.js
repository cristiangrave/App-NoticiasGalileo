import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/optionSlice";
import CreateSliceOP from "./reducers/createSlice";

export default configureStore({
  reducer: {
    option: optionReducer,
    createOp: CreateSliceOP,
  },
});
