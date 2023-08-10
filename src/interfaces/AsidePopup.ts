import { WithClassName } from "../types/types";

export interface AsidePopup extends WithClassName {
    id: string;
    title: string;
    text: string;
    active: boolean;
}