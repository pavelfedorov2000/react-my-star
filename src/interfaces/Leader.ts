import { WithClassName } from "../types/types";

export interface LeaderItem {
    property: string;
    value: string;
}

export interface Leader extends WithClassName {
    items: LeaderItem[];
}