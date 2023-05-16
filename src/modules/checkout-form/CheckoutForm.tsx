import { FormItem } from "../../components";
import { DELIVERY_OPTIONS } from "../../constants/delivery-options";
import { PAYMENT_OPTIONS } from "../../constants/payment-options";
import { PERSONAL_DATA } from "../../constants/personal-data";

const CHECKOUT_FIELDS = [{
    title: 'Персональные данные',
    type: 'inputs',
    items: [...PERSONAL_DATA],
}, {
    title: 'Условия доставки',
    type: 'grid-radios',
    items: [...DELIVERY_OPTIONS]
}, {
    title: 'Способы оплаты',
    type: 'row-radios',
    items: [...PAYMENT_OPTIONS],
}];

const CheckoutForm = () => {
    return (
        <div className="checkout__form checkout-form">
            
            <FormItem className="checkout-form__textarea" name="order_comment" placeholder="Комментарий к заказу" label="Комментарий к заказу" />
        </div>
    );
};

export default CheckoutForm;