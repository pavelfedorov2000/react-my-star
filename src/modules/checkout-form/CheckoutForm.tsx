import { CheckoutDelivery, CheckoutFieldset, CheckoutPayment, CheckoutPersonal, FormItem } from "../../components";
import { CheckoutFieldset as CheckoutFieldsetType } from "../../interfaces/CheckoutFieldset";

const mainClass = 'checkout-form"';

const CHECKOUT_FIELDS: CheckoutFieldsetType[] = [{
    title: 'Персональные данные',
    children: <CheckoutPersonal />
}, {
    title: 'Условия доставки',
    children: <CheckoutDelivery />
}, {
    title: 'Способы оплаты',
    children: <CheckoutPayment />
}];

const CheckoutForm = () => {
    return (
        <div className={`${mainClass} checkout__form`}>
            {CHECKOUT_FIELDS.map((fieldset, index) => (
                <CheckoutFieldset key={index} {...fieldset} />
            ))}
            <FormItem className={`${mainClass}__textarea`} name="ORDER_COMMENT" placeholder="Комментарий к заказу" label="Комментарий к заказу" />
        </div>
    );
};

export default CheckoutForm;