import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatalogFilter, SizesFilter } from "../../enums/CatalogFilter";
import { CATALOG_FILTERS } from "../../constants/catalog-filters";

interface CatalogFiltersState {
    [CatalogFilter.Sort]: string;
    [CatalogFilter.Category]: string[];
    //color: string[];
    [CatalogFilter.Price]: [number, number];
    [CatalogFilter.Room]: string[];
    [CatalogFilter.Collection]: string[];
    [CatalogFilter.Sizes]: {
        width?: [number, number];
        height?: [number, number];
        depth?: [number, number];
    };
    [CatalogFilter.Sale]: string[];
}

const priceRange = CATALOG_FILTERS.find((filter) => filter.name === CatalogFilter.Price)?.ranges?.at(-1);

type sizesRangeItem = {
    name: string;
    range: [number, number];
};

type sizesRangeType = sizesRangeItem[] | undefined;

const sizesRange: sizesRangeType = CATALOG_FILTERS.find((filter) => filter.name === CatalogFilter.Sizes)?.ranges?.map((range) => {
    return {
        name: range.name,
        range: [range.min, range.max]
    }
});

const initialState: CatalogFiltersState = {
    [CatalogFilter.Sort]: '',
    [CatalogFilter.Category]: [],
    [CatalogFilter.Price]: [priceRange?.min ?? 0, priceRange?.max ?? 1000],
    [CatalogFilter.Room]: [],
    [CatalogFilter.Collection]: [],
    [CatalogFilter.Sizes]: {
        width: sizesRange?.find((item) => item.name === SizesFilter.Width)?.range,
        height: sizesRange?.find((item) => item.name === SizesFilter.Height)?.range,
        depth: sizesRange?.find((item) => item.name === SizesFilter.Depth)?.range,
    },
    [CatalogFilter.Sale]: [],
};

export const catalogFiltersSlice = createSlice({
    name: 'catalogFilters',
    initialState,
    reducers: {
        /* setSort(state, action: PayloadAction<string>) {

        } */
    }
});

export default catalogFiltersSlice.reducer;