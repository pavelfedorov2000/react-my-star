import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatalogFiltersState {
    sort: string;
    category: string[];
    color: string[];
    price: [number, number];
    room: string[];
    collection: string[];
    sizes: {
        width: [number, number];
        height: [number, number];
        depth: [number, number];
    };
    promotion: string[];
}

const initialState: CatalogFiltersState = {
    sort: '',
    category: [],
    color: [],
    price: [33, 897],
    room: [],
    collection: [],
    sizes: {
        width: [37, 1292],
        height: [18, 220],
        depth: [2, 2076],
    },
    promotion: [],
};

export const catalogFiltersSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<string>) {

        }
    }
});

export default catalogFiltersSlice.reducer;