import { FormItem } from "../../components";

const CHECKOUT_FIELDS = [{
    title: '',
    inputs: [],
}, {
    title: '',
    radios: [],
}, {
    title: '',
    radios: [],
}];

const CheckoutForm = () => {
    return (
        <div className="checkout__form checkout-form">
            
            <FormItem className="checkout-form__textarea" name="order_comment" placeholder="Комментарий к заказу" label="Комментарий к заказу" />
        </div>
    );
};

export default CheckoutForm;