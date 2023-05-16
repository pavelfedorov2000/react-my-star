import { PromocodeStatus } from "../../enums/PromocodeStatus";
import PromocodeForm from "../promocode-form/PromocodeForm";

const CheckoutTable = () => {
    return (
        <div className="checkout-table">
            <div className="checkout-table__items">
                <div className="checkout-table__item">
                    <div className="checkout-table__item-top">
                        <div className="checkout-table__item-name">Количество товаров:</div>
                        <div className="checkout-table__item-value">4</div>
                    </div>
                </div>
                <div className="checkout-table__item">
                    <div className="checkout-table__item-top">
                        <div className="checkout-table__item-name">Товаров на сумму:</div>
                        <div className="checkout-table__item-value">484 руб.</div>
                    </div>
                </div>
                <div className="checkout-table__item">
                    <button className="checkout-table__item-top checkout-table__item-top--drop"
                            type="button"
                            aria-expanded="false">
                        <div className="checkout-table__item-name">Скидка:</div>
                        <div className="checkout-table__item-value">
                            <span>- 10 руб.</span>
                        </div>
                    </button>
                    <div className="checkout-table__sublist checkout-table__hidden">
                        <div className="checkout-table__sublist-item">
                            <span>Персональная скидка:</span>
                            <span>5 руб.</span>
                        </div>
                        <div className="checkout-table__sublist-item">
                            <span>Скидка за количество товаров:</span>
                            <span>5 руб.</span>
                        </div>
                    </div>
                </div>
                <div className="checkout-table__item">
                    <button className="checkout-table__item-top checkout-table__item-top--drop"
                            type="button"
                            aria-expanded="false">
                        <div className="checkout-table__item-name">Использовать промокод:</div>
                    </button>
                    <div className="checkout-table__hidden">
                        <PromocodeForm status={PromocodeStatus.Error} />
                    </div>
                </div>
            </div>
            <div className="checkout-table__overall">
                <span>Общая сумма:</span>
                <span>474 руб.</span>
            </div>
        </div>
    );
};

export default CheckoutTable;