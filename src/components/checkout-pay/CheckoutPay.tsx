import { CheckoutPay as CheckoutPayType } from "../../interfaces/CheckoutPay";
import { Text } from "../../interfaces/Text";

/* interface Props extends CheckoutPayType {
    className?: string;
} */

const CheckoutPay = ({ title, subtitle, items }: CheckoutPayType) => {
    return (
        <div className="checkout-form__hidden checkout-form__pay checkout-pay">
            <div className="checkout-pay__title">{title}</div>
            <div className="checkout-pay__subtitle">{subtitle}</div>
            <div className="checkout-pay__content">
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