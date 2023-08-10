import { CheckoutTable, LabelBox, Timetable } from "../../components";
import { LabelBox as LabelBoxType, LabelBoxBgColor } from "../../interfaces/LabelBox";
import { Button } from "../../ui";
import { CreditCardIcon } from "../../ui/icons";

const mainClass = 'checkout-total';

const labelBoxes: LabelBoxType[] = [{
    bg: LabelBoxBgColor.Red,
    button: {
        text: 'Войдите или зарегистрируйтесь'
    },
    title: 'в личном кабинете чтобы получать персональную скидку, купоны и многое другое. Получи скидку уже сейчас.'
}, {
    bg: LabelBoxBgColor.Blue,
    title: 'При заказе на сумму свыше 500 руб. ваша скидка будет составлять около 100 руб.'
}, {
    bg: LabelBoxBgColor.Blue,
    title: 'Актуальные промокоды:',
    sale: {
        title: 'Майская акция - 15% на все товары',
        promocode: 'Май2022'
    }
}];

const CheckoutTotal = () => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__inner`}>
                <div className={`${mainClass}__title`}>Сумма заказа</div>
                <CheckoutTable />
                <Button href="/" className={`${mainClass}__btn`} text="Перейти к оформлению" />
                <Button text="Можно купить в рассрочку" style="link-3" icon={<CreditCardIcon />} />
                <div className={`${mainClass}__boxes`}>
                    {labelBoxes.map((box, index) => (
                        <LabelBox key={index} {...box} />
                    ))}
                </div>
                <Timetable />
            </div>
        </div>
    );
};

export default CheckoutTotal;