import { CheckoutFieldType } from "../enums/CheckoutFieldType";
import { DeliveryOption } from "./DeliveryOption";
import { Field } from "./Field";
import { PaymentItem } from "./PaymentItem";

export interface CheckoutFieldset {
    title: string;
    type: CheckoutFieldType.Inputs | CheckoutFieldType.GridRadios | CheckoutFieldType.RowRadios;
    //items: Field[] | DeliveryOption[] | PaymentItem[];
}