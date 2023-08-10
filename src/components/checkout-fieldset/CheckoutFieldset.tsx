import { CheckoutFieldset as Props } from "../../interfaces/CheckoutFieldset";

const CheckoutFieldset = ({ title, children }: Props) => {
    return (
        <fieldset className="checkout-form__item">
            <legend className="checkout-form__legend">{title}</legend>
            {children}
        </fieldset>
    );
};

export default CheckoutFieldset;