import classNames from "classnames";
import { Button } from "../../ui";
import Logo from "../logo/Logo";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { modalsSlice } from "../../redux/reducers/ModalsSlice";
import { Auth, ENTER_OPTIONS, EnterOption } from "../../enums/Auth";
import FormAgree from "../form-agree/FormAgree";
import { ButtonType } from "../../enums/ButtonType";
import { AsidePopup as AsidePopupType } from "../../interfaces/AsidePopup";
import { FieldType } from "../../enums/FieldType";
import { BackIcon, CloseIcon } from "../../ui/icons";
import FormItem from "../form-item/FormItem";
import { AUTH_TABS } from "../../constants/auth-fields";

interface Props extends AsidePopupType {
    className?: string;
}

const AsidePopup = ({ className, id, title, text, active }: Props) => {
    const dispatch = useAppDispatch();
    const { isPasswordRecoveryOpen } = useAppSelector((state) => state.modalsReducer);
    const [authOption, setAuthOption] = useState(0);

    const [enterOption, setEnterOption] = useState(ENTER_OPTIONS[0]);
    const handleChangeEnterOption = () => {
        setEnterOption((prev) => ENTER_OPTIONS.filter((option) => option !== prev)[0]);
    }

    const handleClose = () => {
        dispatch(modalsSlice.actions.closeAuth());
        document.body.classList.remove('_lock');
    }

    const handleBack = () => {
        dispatch(modalsSlice.actions.closePasswordRecovery());
        //document.body.classList.remove('_lock');
    }

    const handleSubmit = () => {
        handleClose();
    }

    /* const checkIsValid = (fields: Field[]) => {
        fields.every((field) => field.value !== '');
    } */

    return (
        <div id={id} className={classNames('aside-popup', className, {
            'active': active
        })}>
            <Button onClick={handleClose} className="aside-popup__close close-btn" icon={<CloseIcon />} ariaLabel="Закрыть окно авторизации" transparent />
            {!isPasswordRecoveryOpen && <Logo className="aside-popup__logo" />}
            <div className="aside-popup__title">{title}</div>
            {isPasswordRecoveryOpen && <Button onClick={handleBack} className="aside-popup__back-btn" text="Назад" icon={<BackIcon />} transparent />}
            <p className="aside-popup__text">{text}</p>
            <div className="tabs aside-popup__tabs" role="tablist">
                {AUTH_TABS.map((tab, index) => (
                    <Button key={tab.name} onClick={() => setAuthOption(index)} className={classNames('tab aside-popup__tab', {
                        'active': authOption === index
                    })} role="tab" id={`${tab.name}_tab`} ariaControls={tab.name} selected={authOption === index ? true : false} tabIndex={0} text={tab.title} transparent />
                ))}
            </div>
            <>
                {AUTH_TABS.map((tab, index) => (
                    <div key={tab.name} id={tab.name} className={classNames('tabs-content', {
                        'active': authOption === index
                    })} role="tabpanel" aria-labelledby={`${tab.name}_tab`}>
                        <div className="aside-popup__content" id={`${enterOption}_enter`}>
                            <form action="#" className="aside-popup__form">
                                <>
                                    <div className="aside-popup__form-inputs">
                                        {tab.fields.map((field) => (
                                            <FormItem key={field.name} className="aside-popup__form-input" {...field} />
                                        ))}
                                        {enterOption.name === EnterOption.Phone && <FormItem name="phone" fieldType={FieldType.Tel} placeholder="+375 (ХХ) ХХХ ХХ ХХ" />}
                                    </div>
                                    {enterOption.name === EnterOption.Login &&
                                        <div className="aside-popup__form-wrap">
                                            <FormAgree text={tab.name === Auth.Enter ? 'Запомнить меня' : <>`Подтверждаю согласие с <a href="#">Политикой конфиденциальности</a>, а также даю согласие на обработку <a href="#" > персональных данных</ a>`</>} check />
                                            {tab.name === Auth.Enter &&
                                                <Button style="link-gray" text="Забыли пароль?" />
                                            }
                                        </div>
                                    }
                                </>
                                {tab.name === Auth.Enter &&
                                    <div className="aside-popup__phone-code">
                                        <FormItem className="aside-popup__form-input" name="phone_code" placeholder="Введите код" label="Введите код" />
                                        <Button style="link-gray" text="Отправить код повторно" />
                                    </div>
                                }
                                <Button className="aside-popup__form-btn" text="Войти" type={ButtonType.Submit} />
                            </form>
                            {tab.name === Auth.Enter && <Button onClick={handleChangeEnterOption} className="aside-popup__link-btn" style="link" text={enterOption.text} />}
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
};

export default AsidePopup;