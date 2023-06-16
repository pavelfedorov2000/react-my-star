import { CatalogFilter, SizesFilter } from "../enums/CatalogFilter";
import { CatalogFilter as CatalogFilterType } from "../interfaces/CatalogFilter";
import { FieldType } from "../enums/FieldType";

export const CATALOG_FILTERS: CatalogFilterType[] = [{
    name: CatalogFilter.Sort,
    title: 'Сортировка',
    fieldType: FieldType.Radio,
    items: [{
        label: 'Сначала дешевые'
    }, {
        label: 'Сначала дорогие'
    }, {
        label: 'По популярности'
    }, {
        label: 'По новизне'
    }]
}, {
    name: CatalogFilter.Category,
    title: 'Категория',
    fieldType: FieldType.Checkbox,
    items: [{
        label: 'Шкафы'
    }, {
        label: 'Кровати'
    }, {
        label: 'Столы и стулья'
    }, {
        label: 'Стеллажи'
    }, {
        label: 'Комоды'
    }, {
        label: 'Тумбы'
    }, {
        label: 'Полки'
    }, {
        label: 'Матрасы'
    }, {
        label: 'Зеркала'
    }, {
        label: 'Другое'
    }]
}, {
    name: CatalogFilter.Price,
    title: 'Цена',
    fieldType: FieldType.Range,
    ranges: [{
        name: 'price',
        prefix: 'руб.',
        min: 33,
        max: 897
    }]
}, {
    name: CatalogFilter.Room,
    title: 'Комната',
    fieldType: FieldType.Checkbox,
    items: [{
        label: 'Гостиная'
    }, {
        label: 'Спальня'
    }, {
        label: 'Прихожая'
    }, {
        label: 'Подростковая'
    }, {
        label: 'Офис'
    }, {
        label: 'Кухня'
    }]
}, {
    name: CatalogFilter.Collection,
    title: 'Коллекции',
    fieldType: FieldType.Checkbox,
    items: [{
        label: 'Вирджиния'
    }, {
        label: 'Сноули'
    }, {
        label: 'Хинтон'
    }, {
        label: 'Инсар'
    }, {
        label: 'Техас'
    }, {
        label: 'Кухня'
    }, {
        label: 'Анника'
    }, {
        label: 'Мелтон'
    }, {
        label: 'Юта'
    }]
}, {
    name: CatalogFilter.Sizes,
    title: 'Цена',
    fieldType: FieldType.Range,
    ranges: [{
        name: SizesFilter.Width,
        title: 'Ширина',
        prefix: 'см',
        min: 37,
        max: 1292
    }, {
        name: SizesFilter.Height,
        title: 'Высота',
        prefix: 'см',
        min: 18,
        max: 220
    }, {
        name: SizesFilter.Depth,
        title: 'Глубина',
        prefix: 'см',
        min: 2,
        max: 2076
    }]
}, {
    name: CatalogFilter.Sale,
    title: 'Акция',
    fieldType: FieldType.Checkbox,
    items: [{
        label: 'Акция и скидки'
    }, {
        label: 'Распродажа'
    }, {
        label: 'Ликвидация'
    }]
}];