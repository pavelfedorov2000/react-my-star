import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Shop } from "../../interfaces/Shop";
import { City } from "../../enums/City";

interface ShopsState {
    shops: Shop[];
    center: number[];
    cities: string[];
    activePins: Shop[];
    mapZoom: number;
    activeCityTabIndex: number;
}

const initialState: ShopsState = {
    shops: [],
    center: [0, 0],
    cities: [],
    activePins: [],
    mapZoom: 7,
    activeCityTabIndex: 0,
};

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShops(state, action: PayloadAction<Shop[]>) {
            state.shops = action.payload;
            state.center = state.shops.filter((shop) => shop.code === City.Minsk)[0].coordinates;
            state.cities = [...new Set(state.shops.map((shop) => shop.city))];
            state.activePins = action.payload;
        },
        setFilter(state, action: PayloadAction<[string, number]>) {
            const filteredShops = state.shops.filter((shop) => shop.city === action.payload[0])
            state.activePins = filteredShops;
            state.center = filteredShops[0].coordinates;
            state.mapZoom = 10;
            state.activeCityTabIndex = action.payload[1];
        },
        resetFilter(state) {
            state.activePins = state.shops;
            state.center = state.shops.filter((shop) => shop.code === City.Minsk)[0].coordinates;
            state.mapZoom = 7;
            state.activeCityTabIndex = 0;
        },
    }
});

export default shopsSlice.reducer;