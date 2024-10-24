import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contac",
  initialState: {
    data: [],
  },
  reducers: {
    readContact: (state, action) => {
      state.data = action.payload;
    },
    addContact: (state, action) => {
      state.data.data.push(action.payload);
    },
  },
});

export const { addContact, readContact } = contactSlice.actions;

export default contactSlice.reducer;
