import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "admin", // Por defecto, el usuario es un usuario normal
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setUserRole } = userSlice.actions;
export default userSlice.reducer;
