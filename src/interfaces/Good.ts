import { Leader } from "./Leader";

interface ProductGalleryVariant {
    color: { src: string; };
    items: { src: string; }[];
}

interface ProductGallery {
    variants: ProductGalleryVariant[];
}

export interface Good {
    id: string;
    gallery: ProductGallery;
    title: string;
    price: number;
    country: string;
    color: string;
    isNew?: boolean;
    sale?: boolean;
    popular?: boolean;
    hit?: boolean;
    installment?: boolean;
    delivery?: boolean;
    isSwiperSlide?: boolean;
}

export interface Product extends Good {
    category: string;
    subcategory?: string;
    out_of_stock?: boolean;
    articul: string;
    text?: string;
    leader: Leader;
}