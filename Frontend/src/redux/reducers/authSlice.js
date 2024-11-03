import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'autorizacion',
    initialState: {
        value: 'noAutorizado'
    },
    reducers:{
        autorizar: (state, action) => {
            state.value = 'autorizado'
        },
        noAutorizado: (state, action) => {
            state.value = 'noAutorizado'
        }
    }
})

export const {autorizar, noAutorizado} = authSlice.actions
export default authSlice.reducer