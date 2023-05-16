import { DiscountsProgress } from "../../components";

const Discounts = () => {
    return (
        <div className="discounts">
            <div className="discounts__personal">Ваша персональная скидка - 3%</div>
            <DiscountsProgress />
            <ol className="discounts-progress__list">
                <li>Скидка распространяется на все товары, кроме товаров с предельными скидками.</li>
                <li>Размер скидки зависит от количества доставленных Вам товаров за последние 12 месяцев от
                    сегодняшнего числа.
                </li>
                <li>Скидка не сбрасывается в конце календарного года и не начинается заново в начале, она
                    действует все время.
                </li>
                <li>Скидка автоматически пересчитывается после каждого доставленного Вам заказа.</li>
            </ol>
        </div>
    );
};

export default Discounts;