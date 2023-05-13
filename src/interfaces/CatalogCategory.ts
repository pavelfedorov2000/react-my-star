export interface CatalogSubcategory {
    href?: string;
    title: string;
    subcategories?: CatalogSubcategory[];
}

export interface CatalogCategory extends CatalogSubcategory {
    id?: string;
    order: number;
    img?: {
        src: string;
    };
}

