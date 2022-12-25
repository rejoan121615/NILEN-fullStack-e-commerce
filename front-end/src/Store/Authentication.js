import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "Authentication",
    initialState: { loggedIn: false },
    reducers: {
      logIn(state, action) {
            return { loggedIn: true };
        },
        logOut(state, action) {
            return { loggedIn: false };
        },
    },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice;
