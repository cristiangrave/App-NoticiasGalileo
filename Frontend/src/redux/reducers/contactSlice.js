import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    value: "contact",
  },
  reducers: {
    addContac: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOption } = contactSlice.actions;

export default contactSlice.reducer;
