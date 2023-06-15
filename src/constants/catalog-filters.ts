import { FieldType } from "../enums/FieldType";

export const CATALOG_FILTERS = [{
    title: 'Сортировка',
    type: FieldType.Radio,
    items: [{
        text: 'Сначала дешевые'
    }, {
        text: 'Сначала дорогие'
    }, {
        text: 'По популярности'
    }, {
        text: 'По новизне'
    }]
}, {
    title: 'Категория',
    type: FieldType.Checkbox,
    items: [{
        text: 'Шкафы'
    }, {
        text: 'Кровати'
    }, {
        text: 'Столы и стулья'
    }, {
        text: 'Стеллажи'
    }, {
        text: 'Комоды'
    }, {
        text: 'Тумбы'
    }, {
        text: 'Полки'
    }, {
        text: 'Матрасы'
    }, {
        text: 'Зеркала'
    }, {
        text: 'Другое'
    }]
}, {
    title: 'Комната',
    type: FieldType.Checkbox,
    items: [{
        text: 'Гостиная'
    }, {
        text: 'Спальня'
    }, {
        text: 'Прихожая'
    }, {
        text: 'Подростковая'
    }, {
        text: 'Офис'
    }, {
        text: 'Кухня'
    }]
}, {
    title: 'Коллекции',
    type: FieldType.Checkbox,
    items: [{
        text: 'Вирджиния'
    }, {
        text: 'Сноули'
    }, {
        text: 'Хинтон'
    }, {
        text: 'Инсар'
    }, {
        text: 'Техас'
    }, {
        text: 'Кухня'
    }, {
        text: 'Анника'
    }, {
        text: 'Мелтон'
    }, {
        text: 'Юта'
    }]
}];