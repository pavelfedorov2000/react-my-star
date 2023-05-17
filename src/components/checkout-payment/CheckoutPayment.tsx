import { PAYMENT_ITEMS } from "../../constants/payment-items";
import { RadioButtonStyle } from "../../enums/RadioButtonStyle";
import { RadioButton } from "../../ui";

const CheckoutPayment = () => {
    return (
        <>
            <div className="checkout-form__row-radios">
                {PAYMENT_ITEMS.map((item, index) => (
                    <RadioButton key={index} className="checkout-form__radio" {...item} />
                ))}
            </div>
            {PAYMENT_ITEMS.find((item) => item.content)?.content?.items.map((item, j) => (
                <div className="checkout-form__grid-radios checkout-form__grid-radios--col-3">
                    <RadioButton key={j} className="checkout-form__pay-radio" name="pay" {...item} style={RadioButtonStyle.Pay} />
                </div>
            ))}
        </>
    );
};

export default CheckoutPayment;