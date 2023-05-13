import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/ContactsSlice';
import shopsReducer from './reducers/ShopsSlice';

const rootReducer = combineReducers({
    contactsReducer,
    shopsReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];