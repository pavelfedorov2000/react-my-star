import { CheckoutPay as CheckoutPayType } from "../../interfaces/CheckoutPay";
import { Text } from "../../interfaces/Text";

/* interface Props extends CheckoutPayType {
    className?: string;
} */

const mainClass = 'checkout-pay';

const CheckoutPay = ({ title, subtitle, items }: CheckoutPayType) => {
    return (
        <div className="checkout-form__hidden checkout-form__pay ">
            <div className={`${mainClass}__title`}>{title}</div>
            <div className={`${mainClass}__subtitle`}>{subtitle}</div>
            <div className={`${mainClass}__content`}>
                {items.map((item, index) => {
                    if (item.text) {
                        return <p key={index}>{item.text}</p>
                    }

                    if (item.list) {
                        return (
                            <ul>
                                {item.list.items.map((li: Text, j: number) => (
                                    <li key={j}>{li.text}</li>
                                ))}
                            </ul>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default CheckoutPay;