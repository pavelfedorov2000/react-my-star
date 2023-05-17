import { createSlice } from "@reduxjs/toolkit";
import { PersonalData } from "../../enums/PersonalData";

interface OrderState {
    personalData: {
        [PersonalData.ORDER_SURNAME]: string;
        [PersonalData.ORDER_NAME]: string;
        [PersonalData.ORDER_PATRONYMIC]: string;
        [PersonalData.ORDER_OWNERSHIP]: string;
        [PersonalData.ORDER_PHONE]: string;
        [PersonalData.ORDER_EMAIL]: string;
        [PersonalData.ORDER_CITY]: string;
        [PersonalData.ORDER_ADDRESS]: string;
    },
    DELIVERY: string;
    PAYMENT: string;
    COMMENT: string;
}

const initialState: OrderState = {
    personalData: {
        [PersonalData.ORDER_SURNAME]: '',
        [PersonalData.ORDER_NAME]: '',
        [PersonalData.ORDER_PATRONYMIC]: '',
        [PersonalData.ORDER_OWNERSHIP]: '',
        [PersonalData.ORDER_PHONE]: '',
        [PersonalData.ORDER_EMAIL]: '',
        [PersonalData.ORDER_CITY]: '',
        [PersonalData.ORDER_ADDRESS]: '',
    },
    DELIVERY: '',
    PAYMENT: '',
    COMMENT: '',
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setPersonalData(state, action) {
            //state.personalData[action.payload.name] = action.payload.value
        },
        setDelivery(state, action) {

        },
        setPayment(state, action) {

        }
    }
});

export default orderSlice.reducer;