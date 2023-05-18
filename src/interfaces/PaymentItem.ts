import { PaymentOption } from "./PaymentOption";

export interface PaymentItem {
    name: string;
    label: string;
    content?: {
        items: PaymentOption[];
    };
}