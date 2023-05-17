import { DELIVERY_OPTIONS } from "../../constants/delivery-options";
import { RadioButtonStyle } from "../../enums/RadioButtonStyle";
import { RadioButton } from "../../ui";

const CheckoutDelivery = () => {
    return (
        <div className="checkout-form__grid-radios checkout-form__grid-radios--col-2">
            {DELIVERY_OPTIONS.map((option, index) => (
                <RadioButton key={index} className="checkout-form__radio" contentClassName="checkout-form__radio-content" {...option} style={RadioButtonStyle.Box} checked={index === 0 ? true : false} />
            ))}
        </div>
    );
};

export default CheckoutDelivery;