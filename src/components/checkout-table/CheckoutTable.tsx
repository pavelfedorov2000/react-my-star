import { PromocodeStatus } from "../../enums/PromocodeStatus";
import { DropArrowIcon } from "../../ui/icons";
import PromocodeForm from "../promocode-form/PromocodeForm";

const mainClass = 'checkout-table';
const itemClass = `${mainClass}__item`;
const sublistClass = `${mainClass}__sublist`;

const CheckoutTable = () => {
    return (
        <div className={`${mainClass}`}>
            <div className={`${mainClass}__items`}>
                <div className={`${itemClass}`}>
                    <div className={`${itemClass}-top`}>
                        <div className={`${itemClass}-name`}>Количество товаров:</div>
                        <div className={`${itemClass}-value`}>4</div>
                    </div>
                </div>
                <div className={`${itemClass}`}>
                    <div className={`${itemClass}-top`}>
                        <div className={`${itemClass}-name`}>Товаров на сумму:</div>
                        <div className={`${itemClass}-value`}>484 руб.</div>
                    </div>
                </div>
                <div className={`${itemClass}`}>
                    <button className={`${itemClass}-top ${itemClass}-top--drop`}
                        type="button"
                        aria-expanded="false">
                        <div className={`${itemClass}-name`}>Скидка:</div>
                        <div className={`${itemClass}-value`}>
                            <span>- 10 руб.</span>
                        </div>
                        <span className={`${itemClass}-arrow`}>
                            <DropArrowIcon />
                        </span>
                    </button>
                    <div className={`${sublistClass} ${itemClass}__hidden`}>
                        <div className={`${sublistClass}-item`}>
                            <span>Персональная скидка:</span>
                            <span>5 руб.</span>
                        </div>
                        <div className={`${sublistClass}-item`}>
                            <span>Скидка за количество товаров:</span>
                            <span>5 руб.</span>
                        </div>
                    </div>
                </div>
                <div className={`${itemClass}`}>
                    <button className={`${itemClass}-top ${itemClass}-top--drop`}
                        type="button"
                        aria-expanded="false">
                        <div className={`${itemClass}-name`}>Использовать промокод:</div>
                        <span className={`${itemClass}-arrow`}>
                            <DropArrowIcon />
                        </span>
                    </button>
                    <div className={`${itemClass}__hidden`}>
                        <PromocodeForm status={PromocodeStatus.Error} />
                    </div>
                </div>
            </div>
            <div className={`${itemClass}__overall`}>
                <span>Общая сумма:</span>
                <span>474 руб.</span>
            </div>
        </div>
    );
};

export default CheckoutTable;