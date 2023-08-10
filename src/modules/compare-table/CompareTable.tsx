import { useState } from "react";
import { Good } from "../../interfaces/Good";
import { Button, Checkbox, Img } from "../../ui";
import goodOne from "../../assets/images/compare/01.png";
import goodTwo from "../../assets/images/compare/02.png";
import goodThree from "../../assets/images/compare/03.png";
import { Link } from "react-router-dom";
import { Pages } from "../../enums/Page";
import classNames from "classnames";
import { CloseIcon } from "../../ui/icons";

const comparedGoods: Good[] = [{
    id: '1',
    gallery: {
        variants: [{
            color: {
                src: ''
            },
            items: [{
                src: goodOne
            }]
        }]
    },
    title: 'Шкаф для одежды Инсар',
    price: 387,
    country: 'Беларусь',
    color: 'Бежевый',
    installment: true,
    delivery: true
}, {
    id: '2',
    gallery: {
        variants: [{
            color: {
                src: ''
            },
            items: [{
                src: goodTwo
            }]
        }]
    },
    title: 'Шкаф для одежды Монтана',
    price: 570,
    country: 'Беларусь',
    color: 'Бежевый',
    installment: false,
    delivery: true
}, {
    id: '3',
    gallery: {
        variants: [{
            color: {
                src: ''
            },
            items: [{
                src: goodThree
            }]
        }]
    },
    title: 'Шкаф для одежды Вирджиния',
    price: 414,
    country: 'Беларусь',
    color: 'Бежевый',
    installment: false,
    delivery: false
}];

enum GoodProp {
    Price = 'price',
    Country = 'country',
    Color = 'color',
    Installment = 'installment',
    Delivery = 'delivery',
}

const rows = [{
    name: GoodProp.Price,
    text: 'Цена'
}, {
    name: GoodProp.Country,
    text: 'Производитель'
}, {
    name: GoodProp.Color,
    text: 'Цвет'
}, {
    name: GoodProp.Installment,
    text: 'Рассрочка'
}, {
    name: GoodProp.Delivery,
    text: 'Доставка'
}];

const mainClass = 'compare-table';

const CompareTable = () => {
    const [goods, setGoods] = useState(comparedGoods);

    const handleRemoveGood = (id: string) => {
        setGoods(goods.filter((good) => good.id !== id));
    }

    return (
        <div className={mainClass}>
            <table>
                <thead>
                    <tr>
                        <td>
                            <Checkbox className={`${mainClass}__check`} label="Скрыть одинаковые параметры" />
                        </td>
                        {goods.map((good, index) => (
                            <td key={index}>
                                <Button onClick={() => handleRemoveGood(good.id)} className={`close-btn ${mainClass}__remove-btn`} icon={<CloseIcon />} ariaLabel="Удалить из списка для сравнения" />
                                <Img className={`${mainClass}__img`} src={good.gallery.variants[0].items[0].src} width={328} height={255} />
                                <Link to={Pages.Catalog.path} className={`${mainClass}__title`}>{good.title}</Link>
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr>
                            <td>{row.text}</td>
                            {goods.map((good) => {
                                const prop = good[row.name];
                                const isBooleanProp = typeof prop === 'boolean';
                                const isPositive = prop === true ? 'Есть' : 'Нет';
                                const lowestPriceGood = comparedGoods.sort((a, b) => a.price - b.price)[0];

                                return (
                                    <td className={classNames({
                                        'marked': isBooleanProp && prop || row.name === GoodProp.Price && lowestPriceGood.price === prop
                                    })}>
                                        {isBooleanProp ? isPositive : prop}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        {goods.map((good) => (
                            <td key={good.id}>
                                <Button style="link" text="Добавить в корзину" />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CompareTable;