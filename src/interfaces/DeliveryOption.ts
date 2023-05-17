import { Leader } from "./Leader";

export interface DeliveryOption {
    name: string;
    label: string;
    list: Leader;
    btn?: {
        text: string;
    }
}