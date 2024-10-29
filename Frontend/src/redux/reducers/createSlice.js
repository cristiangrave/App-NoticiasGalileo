import { createSlice } from "@reduxjs/toolkit";

export const CreateSliceOP = createSlice({
  name: "option",
  initialState: { data: [] },
  reducers: {
    createNews: (state, action) => {
      state.value = action.payload;
    },
    createContact: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { createNews, createContact } = CreateSliceOP.actions;

export default CreateSliceOP.reducer;
