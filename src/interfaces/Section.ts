export interface Section {
    id: string;
    title: string;
    content: {
        items: any[];
        span?: string;
    };
    items?: any[];
    order: number;
}