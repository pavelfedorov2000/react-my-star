import { CatalogCategory } from "../enums/CatalogCategory";
import { CatalogCategory as CatalogCategoryType } from "../interfaces/CatalogCategory";

export const POPULAR_CATALOG_CATEGORIES: CatalogCategoryType[] = [{
    order: 1,
    href: CatalogCategory.Krovati,
    img: {
        src: 'https://i.ibb.co/JnYc9rX/01.jpg'
    },
    title: 'Кровати',
    subcategories: [{
        href: 'dvuspalnye-krovati',
        title: 'Двуспальные кровати'
    }, {
        href: 'dvuhyarusnye-krovati',
        title: 'Двухъярусные кровати'
    }, {
        href: 'krovati-polutornye',
        title: 'Кровати Полуторные'
    }, {
        href: 'odnospalnye-krovati',
        title: 'Односпальные кровати'
    }]
}, {
    order: 2,
    href: CatalogCategory.Shkafy,
    img: {
        src: 'https://i.ibb.co/bLvq9BG/02.jpg'
    },
    title: 'Шкафы',
    subcategories: [{
        href: 'raspashnye-shkafy',
        title: 'Распашные шкафы',
        subcategories: [{
            href: 'dvuhdvernye-raspashnye-shkafy',
            title: 'Двухдверный',
        }, {
            href: 'odnodvernye-raspashnye-shkafy',
            title: 'Однодверный',
        }, {
            href: 'trekhdvernye-raspashnye-shkafy',
            title: 'Трехдверный',
        }, {
            href: 'chetyrekhdvernye-raspashnye-shkafy',
            title: 'Четырехдверный',
        }]
    }, {
        href: 'uglovye-shkafy',
        title: 'Угловые шкафы'
    }, {
        href: 'shkafy-dlya-knig',
        title: 'Шкафы для книг'
    }, {
        href: 'shkafy-s-vitrinoy',
        title: 'Шкафы с витриной'
    }, {
        href: 'shkafy-kupe',
        title: 'Шкафы-купе'
    }]
}, {
    order: 3,
    href: CatalogCategory.Tumby,
    img: {
        src: 'https://i.ibb.co/4RLhH89/03.jpg'
    },
    title: 'Тумбы',
    subcategories: [{
        href: 'prikrovatnye-tumby',
        title: 'Прикроватные тумбы'
    }, {
        href: 'tumby-dlya-obuvi',
        title: 'Тумбы для обуви'
    }, {
        href: 'tumby-pod-tv',
        title: 'Тумбы под телевизор'
    }]
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
    title: 'Столы',
    subcategories: [{
        href: 'obedennye-stoly',
        title: 'Обеденные столы'
    }, {
        href: 'stoly-zhurnalnye',
        title: 'Столы журнальные'
    }, {
        href: 'stoly-kompyuternye',
        title: 'Столы компьютерные'
    }, {
        href: 'tualetnye-stoliki',
        title: 'Туалетные столики'
    }]
}];

export const CATALOG_CATEGORIES: CatalogCategoryType[] = [
    ...POPULAR_CATALOG_CATEGORIES,
    {
        order: 7,
        href: CatalogCategory.Polki,
        title: 'Полки'
    }, {
        order: 8,
        href: CatalogCategory.Matrasy,
        title: 'Матрасы',
        subcategories: [{
            href: 'namatrasniki',
            title: 'Наматрисники'
        }, {
            href: 'odeyala',
            title: 'Одеяла'
        }, {
            href: 'podushki',
            title: 'Подушки'
        }]
    }, {
        order: 9,
        href: CatalogCategory.Drugoe,
        title: 'Другое',
        subcategories: [{
            href: 'veshalki',
            title: 'Вешалки'
        }, {
            href: 'zashchitnye-bortiki',
            title: 'Защитные бортики'
        }, {
            href: 'kompyuternyye-kresla',
            title: 'Компьютерные кресла'
        }, {
            href: 'stulya-obedennye',
            title: 'Стулья обеденные'
        }]
    }
];