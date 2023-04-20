//import { EmptyBlock } from "./EmptyBlock";

export interface Page {
    title?: string;
    subtitle?: string;
    emptyBlock?: any;
}

export interface Route extends Page {
    id: number;
    path: string;
    exact?: boolean;
    before?: string;
    profile?: boolean;
    component: any;
    SubPage?: any;
}