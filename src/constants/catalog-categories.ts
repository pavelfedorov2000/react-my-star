import { CatalogCategory } from "../enums/CatalogCategory";
import { CatalogCategory as CatalogCategoryType } from "../interfaces/CatalogCategory";

export const CATALOG_CATEGORIES: CatalogCategoryType[] = [{
    order: 1,
    href: CatalogCategory.Krovati,
    img: {
        src: 'https://i.ibb.co/JnYc9rX/01.jpg'
    },
    title: 'Кровати'
}, {
    order: 2,
    href: CatalogCategory.Shkafy,
    img: {
        src: 'https://i.ibb.co/bLvq9BG/02.jpg'
    },
    title: 'Шкафы'
}, {
    order: 3,
    href: CatalogCategory.Tumby,
    img: {
        src: 'https://i.ibb.co/4RLhH89/03.jpg'
    },
    title: 'Тумбы'
}, {
    order: 4,
    href: CatalogCategory.Stellazhi,
    img: {
        src: 'https://i.ibb.co/rF03RvF/04.jpg'
    },
    title: 'Стеллажи'
}, {
    order: 5,
    href: CatalogCategory.Komody,
    img: {
        src: 'https://i.ibb.co/nmdMq9D/05.jpg'
    },
    title: 'Комоды'
}, {
    order: 6,
    href: CatalogCategory.Stoly,
    img: {
        src: 'https://i.ibb.co/NFR7Fqw/06.jpg'
    },
    title: 'Столы'
}];