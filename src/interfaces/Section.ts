export interface Section {
    id: string;
    title: string;
    content: {
        items: any[];
    };
    items?: any[];
    order: number;
}