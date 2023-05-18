import { PAYMENT_ITEMS } from "../../constants/payment-items";
import { RadioButtonStyle } from "../../enums/RadioButtonStyle";
import { RadioButton } from "../../ui";
import CheckoutPay from "../checkout-pay/CheckoutPay";

const cardPaymentItems = PAYMENT_ITEMS.find((item) => item.content)?.content?.items;

const CheckoutPayment = () => {
    return (
        <>
            <div className="checkout-form__row-radios">
                {PAYMENT_ITEMS.map((item, index) => (
                    <RadioButton key={index} className="checkout-form__radio" {...item} />
                ))}
            </div>
            
            <div className="checkout-form__grid-radios checkout-form__grid-radios--col-3">
                {cardPaymentItems?.map((item, index) => (
                    <RadioButton key={index} className="checkout-form__pay-radio" name="pay" {...item} style={RadioButtonStyle.Pay} />
                ))}
            </div>
            {cardPaymentItems?.map((item, index) => (
                <CheckoutPay key={index} {...item.content} />
            ))}
        </>
    );
};

export default CheckoutPayment;