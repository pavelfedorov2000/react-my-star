import { CatalogCategory } from "../enums/CatalogCategory";
import { CatalogCategory as CatalogCategoryType } from "../interfaces/CatalogCategory";
import { BedIcon, BedThumbIcon, BlanketIcon, BooksCabinetIcon, BunkBedIcon, CoffeeTableIcon, ComputerTableIcon, DoubleBedIcon, KomodyIcon, LunchTableIcon, MatressIcon, NamatrasnikIcon, PillowIcon, PolkiIcon, ShkafyIcon, ShoesThumbIcon, ShowcaseCabinetIcon, SingleBedIcon, SingleHalfBedIcon, StellazhiIcon, TableIcon, ThumbIcon, ToiletTableIcon, TvThumbIcon, ZerkalaIcon } from "../ui/icons";

export const POPULAR_CATALOG_CATEGORIES: CatalogCategoryType[] = [{
    order: 1,
    href: CatalogCategory.Krovati,
    img: {
        src: 'https://i.ibb.co/JnYc9rX/01.jpg'
    },
    icon: <BedIcon />,
    title: 'Кровати',
    subcategories: [{
        href: 'dvuspalnye-krovati',
        icon: <DoubleBedIcon />,
        title: 'Двуспальные кровати'
    }, {
        href: 'dvuhyarusnye-krovati',
        icon: <BunkBedIcon />,
        title: 'Двухъярусные кровати'
    }, {
        href: 'krovati-polutornye',
        icon: <SingleHalfBedIcon />,
        title: 'Кровати Полуторные'
    }, {
        href: 'odnospalnye-krovati',
        icon: <SingleBedIcon />,
        title: 'Односпальные кровати'
    }]
}, {
    order: 2,
    href: CatalogCategory.Shkafy,
    img: {
        src: 'https://i.ibb.co/bLvq9BG/02.jpg'
    },
    icon: <ShkafyIcon />,
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
        icon: <BooksCabinetIcon />,
        title: 'Шкафы для книг'
    }, {
        href: 'shkafy-s-vitrinoy',
        icon: <ShowcaseCabinetIcon />,
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
    icon: <ThumbIcon />,
    subcategories: [{
        href: 'prikrovatnye-tumby',
        icon: <BedThumbIcon />,
        title: 'Прикроватные тумбы'
    }, {
        href: 'tumby-dlya-obuvi',
        icon: <ShoesThumbIcon />,
        title: 'Тумбы для обуви'
    }, {
        href: 'tumby-pod-tv',
        icon: <TvThumbIcon />,
        title: 'Тумбы под телевизор'
    }]
}, {
    order: 4,
    href: CatalogCategory.Stellazhi,
    img: {
        src: 'https://i.ibb.co/rF03RvF/04.jpg'
    },
    icon: <StellazhiIcon />,
    title: 'Стеллажи'
}, {
    order: 5,
    href: CatalogCategory.Komody,
    img: {
        src: 'https://i.ibb.co/nmdMq9D/05.jpg'
    },
    icon: <KomodyIcon />,
    title: 'Комоды'
}, {
    order: 6,
    href: CatalogCategory.Stoly,
    img: {
        src: 'https://i.ibb.co/NFR7Fqw/06.jpg'
    },
    icon: <TableIcon />,
    title: 'Столы',
    subcategories: [{
        href: 'obedennye-stoly',
        icon: <LunchTableIcon />,
        title: 'Обеденные столы'
    }, {
        href: 'stoly-zhurnalnye',
        icon: <CoffeeTableIcon />,
        title: 'Столы журнальные'
    }, {
        href: 'stoly-kompyuternye',
        icon: <ComputerTableIcon />,
        title: 'Столы компьютерные'
    }, {
        href: 'tualetnye-stoliki',
        icon: <ToiletTableIcon />,
        title: 'Туалетные столики'
    }]
}];

export const CATALOG_CATEGORIES: CatalogCategoryType[] = [
    ...POPULAR_CATALOG_CATEGORIES,
    {
        order: 7,
        href: CatalogCategory.Polki,
        icon: <PolkiIcon />,
        title: 'Полки'
    }, {
        order: 8,
        href: CatalogCategory.Matrasy,
        icon: <MatressIcon />,
        title: 'Матрасы',
        subcategories: [{
            href: 'namatrasniki',
            icon: <NamatrasnikIcon />,
            title: 'Наматрисники'
        }, {
            href: 'odeyala',
            icon: <BlanketIcon />,
            title: 'Одеяла'
        }, {
            href: 'podushki',
            icon: <PillowIcon />,
            title: 'Подушки'
        }]
    }, {
        order: 9,
        href: CatalogCategory.Zerkala,
        icon: <ZerkalaIcon />,
        title: 'Зеркала'
    }, {
        order: 10,
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