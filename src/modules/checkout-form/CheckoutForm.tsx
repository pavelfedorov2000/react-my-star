import { CheckoutFieldset, FormItem } from "../../components";
import { CheckoutFieldType } from "../../enums/CheckoutFieldType";

/* const CHECKOUT_FIELDS: CheckoutFieldsetType[] = [{
    title: 'Персональные данные',
    type: CheckoutFieldType.Inputs,
    items: [...PERSONAL_DATA],
}, {
    title: 'Условия доставки',
    type: CheckoutFieldType.GridRadios,
    items: [...DELIVERY_OPTIONS]
}, {
    title: 'Способы оплаты',
    type: CheckoutFieldType.RowRadios,
    items: [...PAYMENT_ITEMS],
}]; */

//console.log(CHECKOUT_FIELDS);

const CheckoutForm = () => {
    return (
        <div className="checkout__form checkout-form">
            <CheckoutFieldset title="Персональные данные" type={CheckoutFieldType.Inputs} />
            <CheckoutFieldset title="Условия доставки" type={CheckoutFieldType.GridRadios} />
            <CheckoutFieldset title="Способы оплаты" type={CheckoutFieldType.RowRadios} />
            <FormItem className="checkout-form__textarea" name="ORDER_COMMENT" placeholder="Комментарий к заказу" label="Комментарий к заказу" />
        </div>
    );
};

export default CheckoutForm;