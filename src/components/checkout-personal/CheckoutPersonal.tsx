import { PERSONAL_DATA } from "../../constants/personal-data";
import { FieldType } from "../../enums/FieldType";
import { Field } from "../../ui";
import FormItem from "../form-item/FormItem";

const CheckoutPersonal = () => {
    return (
        <div className="checkout-form__inputs">
            {PERSONAL_DATA.map((field) => {
                if (field.fieldType === FieldType.Select) {
                    return <Field key={field.name} className="checkout-form__select" {...field} />
                }
                return <FormItem key={field.name} className="checkout-form__input" {...field} />
            })}
        </div>
    );
};

export default CheckoutPersonal;