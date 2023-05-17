import { PaymentItem } from "../interfaces/PaymentItem";

export const PAYMENT_ITEMS: PaymentItem[] = [{
    name: 'ORDER_PAYMENT',
    title: 'Оплата при получении',
}, {
    name: 'ORDER_PAYMENT',
    title: 'Картой онлайн',
    content: {
        items: [{
            label: 'Онлайн оплата',
            content: {
                title: 'Онлайн оплата',
                subtitle: 'Информация об онлайн оплате',
                items: [{
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit delectus pariatur obcaecati quaerat, laboriosam ex dolor omnis minus minima asperiores, aliquam repellat eligendi? Minus ducimus odit cumque omnis provident!'
                }]
            }
        }, {
            label: 'Перевод через ЕРИП',
            content: {
                title: 'Оплата переводом через ЕРИП',
                subtitle: 'Информация о переводе через ЕРИП',
                items: [{
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit delectus pariatur obcaecati quaerat, laboriosam ex dolor omnis minus minima asperiores, aliquam repellat eligendi? Minus ducimus odit cumque omnis provident!'
                }]
            }
        }, {
            label: 'Карта рассрочки «Халва»',
            content: {
                title: 'Оплата картой рассрочки «Халва»',
                subtitle: 'Информация об оплате через карту рассрочки',
                items: [{
                    text: 'Карта рассрочки «Халва» от МТБанка — это 4 или 6 месяцев рассрочки на любой товар в нашем онлайн-гипермаркете без первоначального взноса и переплат. Рассрочка по карте 4 месяца действует при оплате по терминалу, а 6 месяцев — при оплате «Халвой» онлайн на сайте. Множество товаров доступно еще и в продленную рассрочку на 9 месяцев или на на 12 месяцев.'
                }, {
                    text: 'Продленная рассрочка предоставляется только при оплате онлайн картой «Халва» и применении промокодов, указанных на страницах продленной рассрочки.'
                }, {
                    text: 'Купить в рассрочку по «Халве» просто, оплата возможна несколькими способами:'
                }, {
                    list: {
                        items: [{
                            text: 'онлайн при оформлении заказа на сайте;'
                        }, {
                            text: 'через терминал при доставке курьером;'
                        }, {
                            text: 'через терминалы в наших собственных ПВЗ.'
                        }]
                    }
                }, {
                    text: 'При иных способах оплаты с карты «Халва» будут списаны только собственные средства (или отказано в оплате, если их недостаточно).'
                }, {
                    btn: {
                        href: '#',
                        text: 'Перейти к оплате'
                    }
                }]
            }
        }, {
            label: 'Карта рассрочки «Красная карта»',
            content: {
                title: 'Оплата картой рассрочки «Красная карта»',
                subtitle: 'Информация об оплате через карту рассрочки',
                items: [{
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit delectus pariatur obcaecati quaerat, laboriosam ex dolor omnis minus minima asperiores, aliquam repellat eligendi? Minus ducimus odit cumque omnis provident!'
                }]
            }
        }, {
            label: 'Кредит Альфабанк',
            content: {
                title: 'Кредит Альфабанк',
                subtitle: 'Информация о кредите Альфабанка',
                items: [{
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit delectus pariatur obcaecati quaerat, laboriosam ex dolor omnis minus minima asperiores, aliquam repellat eligendi? Minus ducimus odit cumque omnis provident!'
                }]
            }
        }]
    }
}];