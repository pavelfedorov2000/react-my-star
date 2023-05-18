import { CheckoutFieldType } from "../../enums/CheckoutFieldType";
import { CheckoutFieldset as CheckoutFieldsetType } from "../../interfaces/CheckoutFieldset";
import CheckoutDelivery from "../checkout-delivery/CheckoutDelivery";
import CheckoutPayment from "../checkout-payment/CheckoutPayment";
import CheckoutPersonal from "../checkout-personal/CheckoutPersonal";

const CheckoutFieldset = ({ title, type }: CheckoutFieldsetType) => {
    return (
        <fieldset className="checkout-form__item">
            <legend className="checkout-form__legend">{title}</legend>
            {type === CheckoutFieldType.Inputs && <CheckoutPersonal />}
            {type === CheckoutFieldType.GridRadios && <CheckoutDelivery />}
            {type === CheckoutFieldType.RowRadios && <CheckoutPayment />}
        </fieldset>
    );
};

export default CheckoutFieldset;