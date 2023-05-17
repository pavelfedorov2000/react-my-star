import { PERSONAL_DATA } from "../../constants/personal-data";
import FormItem from "../form-item/FormItem";

const CheckoutPersonal = () => {
    return (
        <div className="checkout-form__inputs">
            {PERSONAL_DATA.map((field) => (
                <FormItem key={field.name} className="checkout-form__input" {...field} />
            ))}
        </div>
    );
};

export default CheckoutPersonal;