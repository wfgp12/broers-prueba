import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // not-authenticated, authenticated, checking
        email: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.email = payload.email;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.email = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;