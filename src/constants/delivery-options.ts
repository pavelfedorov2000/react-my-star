import { DeliveryOption } from "../interfaces/DeliveryOption";

export const DELIVERY_OPTIONS: DeliveryOption[] = [{
    title: 'Доставка',
    leader: {
        items: [{
            property: 'Стоимость доставки: ',
            value: '15 руб'
        }, {
            property: 'Доставка в течении: ',
            value: '4 дней'
        }]
    }
}, {
    title: 'Самовывоз',
    leader: {
        items: [{
            property: 'Стоимость доставки: ',
            value: '0 руб'
        }, {
            property: 'Доставка в течении: ',
            value: '1 дня'
        }]
    }
}];