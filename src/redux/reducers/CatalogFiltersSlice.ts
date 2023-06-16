import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatalogFilter } from "../../enums/CatalogFilter";

interface CatalogFiltersState {
    [CatalogFilter.Sort]: string;
    [CatalogFilter.Category]: string[];
    //color: string[];
    [CatalogFilter.Price]: [number, number];
    [CatalogFilter.Room]: string[];
    [CatalogFilter.Collection]: string[];
    [CatalogFilter.Sizes]: {
        width: [number, number];
        height: [number, number];
        depth: [number, number];
    };
    [CatalogFilter.Sale]: string[];
}

const initialState: CatalogFiltersState = {
    [CatalogFilter.Sort]: '',
    [CatalogFilter.Category]: [],
    [CatalogFilter.Price]: [33, 897],
    [CatalogFilter.Room]: [],
    [CatalogFilter.Collection]: [],
    [CatalogFilter.Sizes]: {
        width: [37, 1292],
        height: [18, 220],
        depth: [2, 2076],
    },
    [CatalogFilter.Sale]: [],
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