import { createSlice } from "@reduxjs/toolkit";

interface OrdersState {
    items: []
}

const initialState: OrdersState = {
    items: []
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        
    }
});

export default ordersSlice.reducer;