import { createSlice } from "@reduxjs/toolkit";

interface ModalsState {
    isMenuOpen: boolean;
    isAuthOpen: boolean;
    isPasswordRecoveryOpen: boolean;
}

const initialState: ModalsState = {
    isMenuOpen: false,
    isAuthOpen: false,
    isPasswordRecoveryOpen: false,
};

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openMenu(state) {
            state.isMenuOpen = true
            state.isAuthOpen = false
            state.isPasswordRecoveryOpen = false
        },
        closeMenu(state) {
            state.isMenuOpen = false
            state.isPasswordRecoveryOpen = false
        },
        openAuth(state) {
            state.isMenuOpen = false
            state.isAuthOpen = true
        },
        closeAuth(state) {
            state.isAuthOpen = false
        },
        openPasswordRecovery(state) {
            state.isMenuOpen = false
            state.isAuthOpen = false
            state.isPasswordRecoveryOpen = true
        },
        closePasswordRecovery(state) {
            state.isPasswordRecoveryOpen = false
        },
    }
});

export default modalsSlice.reducer;