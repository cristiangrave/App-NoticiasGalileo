import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
    reducer:{
        option: optionReducer
    }
})