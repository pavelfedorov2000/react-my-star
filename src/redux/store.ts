import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/ContactsSlice';
import shopsReducer from './reducers/ShopsSlice';
import modalsReducer from './reducers/ModalsSlice';
import profileReducer from './reducers/ProfileSlice';
import ordersReducer from './reducers/OrdersSlice';
import cartReducer from './reducers/CartSlice';
import catalogFiltersReducer from './reducers/CatalogFiltersSlice';

const rootReducer = combineReducers({
    contactsReducer,
    shopsReducer,
    modalsReducer,
    profileReducer,
    ordersReducer,
    cartReducer,
    catalogFiltersReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];