import { Text } from "./Text";

export interface NewsItem {
    id: string;
    img: {
        src: string;
    };
    title: Text;
    date: string;
}