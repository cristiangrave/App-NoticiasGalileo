import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    userName: "",
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },

    setUser: (state, action) => {
      state.userName = action.payload;
    },

    deleteDto: (state, action) => {
      state.role = null;
      state.userName = null;
    },
    getUserType: (state, action) => {
      state.role = role;
    },
  },
});

export const { setUserRole, setUser, deleteDto } = userSlice.actions;
export default userSlice.reducer;
