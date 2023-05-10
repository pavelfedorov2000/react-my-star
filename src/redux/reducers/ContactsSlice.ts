import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contacts } from "../../interfaces/Contacts";

interface ContactsState {
    data: Contacts;
}

const initialState: ContactsState = {
    data: {
        email: '',
        phones: [],
        address: {
            street: '',
        },
        schedule: [],
        shop_address: {
            street: '',
        }
    },
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts(state, action: PayloadAction<Contacts>) {
            state.data = action.payload
        }
    }
});

export default contactsSlice.reducer;