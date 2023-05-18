import { EmptyBlock } from "./EmptyBlock";

export interface Page {
    path: string;
    title: string;
    subtitle?: string;
    emptyBlock?: EmptyBlock;
    inHeader?: boolean;
    SubPage?: any;
    profile?: boolean;
}

export interface Route extends Page {
    id: number;
    exact?: boolean;
    component: any;
}

type PageTopType = Pick<Page, "path" | "title" | "profile">;

export interface PageTop extends PageTopType {
    divTitle?: boolean;
    btn?: any;
}