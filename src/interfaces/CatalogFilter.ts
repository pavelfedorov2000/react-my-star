export interface DropFilter {
    name: string;
    items: any[];
}

export interface CatalogFilter extends DropFilter {
    toggleText: string;
}