import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  /* Este data almacena los datos que nesesitamos a su ves lo vamos a ir modificando conforme nesesitemos */
  initialState: { data: [] },
  reducers: {
    addNews: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addNews } = newsSlice.actions;

export default newsSlice.reducer;
