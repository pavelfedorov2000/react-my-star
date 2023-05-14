import { ReactNode } from "react";

export interface CatalogSubcategory {
    href: string;
    title: string;
    subcategories?: CatalogSubcategory[];
    icon?: ReactNode;
}

export interface CatalogCategory extends CatalogSubcategory {
    id?: string;
    order: number;
    img?: {
        src: string;
    };
}

