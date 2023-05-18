import classNames from "classnames";
import { FieldType } from "../../enums/FieldType";
import { Field as IField } from "../../interfaces/Field";
import Field from "../field/Field";
import { RadioButtonStyle } from "../../enums/RadioButtonStyle";
import { Leader as LeaderType } from "../../interfaces/Leader";
import { Leader } from "../../components";
import Button from "../button/Button";
import { PinIcon } from "../icons";

interface Props extends IField {
    className?: string;
    contentClassName?: string;
    style?: string;
    list?: LeaderType;
    btn?: {
        text: string;
    },
    checked?: boolean;
}

const RadioButton = ({ className, contentClassName, name, label, style, list, btn, checked }: Props) => {
    return (
        <label className={classNames('radiobutton', className)}>
            <Field className="radiobutton" name={name} fieldType={FieldType.Radio} checked={checked} />
            {!style && <span className="radiobutton__style"></span>}
            {label && !style && <span className="radiobutton__title">{label}</span>}
            {style === RadioButtonStyle.Box &&
                <div className={classNames('radiobutton__inner', contentClassName)}>
                    <div className="checkout-form__radio-top">
                        <span className="radiobutton__style"></span>
                        <div className="radiobutton__title">{label}</div>
                    </div>
                    {list && <Leader className="checkout-form__radio-list" {...list} />}
                    {btn && <Button {...btn} style="link" icon={<PinIcon />} />}
                    {btn && <p>г.Минск, ул. Каменногорская, 3</p>}
                </div>
            }
            {style === RadioButtonStyle.Pay && <span className="radiobutton__inner">{label}</span>}
        </label>
    );
};

export default RadioButton;