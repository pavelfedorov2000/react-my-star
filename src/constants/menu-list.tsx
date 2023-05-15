import { Pages } from "../enums/Page";
import { CatalogSubcategory } from "../interfaces/CatalogCategory";
import { DownloadIcon } from "../ui/icons";

export const MENU_LIST: CatalogSubcategory[] = [{
    icon: <DownloadIcon />,
    href: '#',
    title: 'Каталог'
}, {
    href: Pages.Catalog.path,
    title: 'Мебель для гостиной'
}, {
    href: Pages.Catalog.path,
    title: 'Мебель для спальни'
}, {
    href: Pages.Catalog.path,
    title: 'Мебель для прихожей'
}, {
    href: Pages.Catalog.path,
    title: 'Мебель для офиса'
}, {
    href: Pages.Catalog.path,
    title: 'Мебель для подростковой комнаты'
}];