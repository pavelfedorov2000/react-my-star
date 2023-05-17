import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    items: []
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    }
});

export default cartSlice.reducer;