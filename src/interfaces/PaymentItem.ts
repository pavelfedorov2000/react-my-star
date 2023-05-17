import { PaymentOption } from "./PaymentOption";

export interface PaymentItem {
    name: string;
    title: string;
    content?: {
        items: PaymentOption[];
    };
}