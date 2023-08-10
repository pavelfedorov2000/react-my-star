import classNames from "classnames";
import { Button } from "../../ui";
import Logo from "../logo/Logo";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { modalsSlice } from "../../redux/reducers/ModalsSlice";
import { Auth, ENTER_OPTIONS, EnterOption } from "../../enums/Auth";
import FormAgree from "../form-agree/FormAgree";
import { ButtonType } from "../../enums/ButtonType";
import { FieldType } from "../../enums/FieldType";
import { BackIcon, CloseIcon } from "../../ui/icons";
import FormItem from "../form-item/FormItem";
import { AUTH_TABS } from "../../constants/auth-fields";
import { WithClassName } from "../../types/types";
import { ClassName } from "../../enums/ClassName";

interface Props extends WithClassName {
    id: string;
    title: string;
    text: string;
    active: boolean;
}

const mainClass = ClassName.AsidePopup;

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
        document.body.classList.remove(ClassName.Lock);
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
        <div id={id} className={classNames(mainClass, className, {
            'active': active
        })}>
            <Button onClick={handleClose} className={`${mainClass}__close close-btn`} icon={<CloseIcon />} ariaLabel="Закрыть окно авторизации" transparent />

            {!isPasswordRecoveryOpen && <Logo className={`${mainClass}__logo`} />}

            <div className={`${mainClass}__title`}>{title}</div>

            {isPasswordRecoveryOpen && <Button onClick={handleBack} className={`${mainClass}__back-btn`} text="Назад" icon={<BackIcon />} transparent />}

            <p className={`${mainClass}__text`}>{text}</p>

            <div className={`${ClassName.Tabs} ${mainClass}__tabs`} role="tablist">
                {AUTH_TABS.map((tab, index) => (
                    <Button key={tab.name} onClick={() => setAuthOption(index)} className={classNames(`tab ${mainClass}__tab`, {
                        'active': authOption === index
                    })} role="tab" id={`${tab.name}_tab`} ariaControls={tab.name} selected={authOption === index ? true : false} tabIndex={0} text={tab.title} transparent />
                ))}
            </div>

            <>
                {AUTH_TABS.map((tab, index) => (
                    <div key={tab.name} id={tab.name} className={classNames('tabs-content', {
                        'active': authOption === index
                    })} role="tabpanel" aria-labelledby={`${tab.name}_tab`}>
                        <div className={`${mainClass}__content`} id={`${enterOption}_enter`}>
                            <form action="#" className={`${mainClass}__form`}>
                                <>
                                    <div className={`${mainClass}__form-inputs`}>
                                        {tab.fields.map((field) => (
                                            <FormItem key={field.name} className={`${mainClass}__form-input`} {...field} />
                                        ))}
                                        {enterOption.name === EnterOption.Phone && <FormItem name="phone" fieldType={FieldType.Tel} placeholder="+375 (ХХ) ХХХ ХХ ХХ" />}
                                    </div>
                                    {enterOption.name === EnterOption.Login &&
                                        <div className={`${mainClass}__form-wrap`}>
                                            <FormAgree text={tab.name === Auth.Enter ? 'Запомнить меня' : <>`Подтверждаю согласие с <a href="#">Политикой конфиденциальности</a>, а также даю согласие на обработку <a href="#" > персональных данных</ a>`</>} check />
                                            {tab.name === Auth.Enter &&
                                                <Button style="link-gray" text="Забыли пароль?" />
                                            }
                                        </div>
                                    }
                                </>
                                {tab.name === Auth.Enter &&
                                    <div className={`${mainClass}__phone-code`}>
                                        <FormItem className={`${mainClass}__form-input`} name="phone_code" placeholder="Введите код" label="Введите код" />
                                        <Button style="link-gray" text="Отправить код повторно" />
                                    </div>
                                }
                                <Button className={`${mainClass}__form-btn`} text="Войти" type={ButtonType.Submit} />
                            </form>
                            {tab.name === Auth.Enter && <Button onClick={handleChangeEnterOption} className={`${mainClass}__link-btn`} style="link" text={enterOption.text} />}
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
};

export default AsidePopup;