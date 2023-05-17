import { DeliveryOption } from "../interfaces/DeliveryOption";

export const DELIVERY_OPTIONS: DeliveryOption[] = [{
    name: 'DELIVERY',
    label: 'Доставка',
    list: {
        items: [{
            property: 'Стоимость доставки',
            value: '15 руб'
        }, {
            property: 'Доставка в течении',
            value: '4 дней'
        }]
    }
}, {
    name: 'DELIVERY',
    label: 'Самовывоз',
    list: {
        items: [{
            property: 'Стоимость доставки',
            value: '0 руб'
        }, {
            property: 'Доставка в течении',
            value: '1 дня'
        }]
    },
    btn: {
        text: 'Выберите пункт выдачи'
    }
}];