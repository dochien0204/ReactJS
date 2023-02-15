import {createSlice} from '@reduxjs/toolkit';

const initialAuth = {isAuthenticate: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    reducers: {
        login(state) {
            state.isAuthenticate = true;
        },
        logout(state) {
            state.isAuthenticate = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;