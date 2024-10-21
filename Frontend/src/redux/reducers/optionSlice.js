import { createSlice } from "@reduxjs/toolkit";

export const optionSlice = createSlice({
  name: "option",
  initialState: {
    value: "Opciones",
  },
  reducers: {
    setOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOption } = optionSlice.actions;

export default optionSlice.reducer;
