import classNames from "classnames";
import { FieldType } from "../../enums/FieldType";
import { Field as IField } from "../../interfaces/Field";
import Field from "../field/Field";
import { RadioButtonStyle } from "../../enums/RadioButtonStyle";
import { Leader } from "../../interfaces/Leader";

interface Props extends IField {
    className?: string;
    style?: string;
    list: Leader;
}

const RadioButton = ({ className, name, label, style, list }: Props) => {
    return (
        <label className={classNames('radiobutton', className)}>
            <Field className="radiobutton__input" name={name} fieldType={FieldType.Radio} />
            {style !== RadioButtonStyle.Box && <span className="radiobutton__style"></span>}
            {label && style !== RadioButtonStyle.Box && <span className="radiobutton__text">{label}</span>}
            {style === RadioButtonStyle.Box &&
                <div className="radiobutton__inner checkout-form__radio-content">
                    <div className="checkout-form__radio-top">
                        <span className="radiobutton__style"></span>
                        <div className="radiobutton__title">{label}</div>
                    </div>
                    <dl className="checkout-form__radio-list">
                        {list.items.map((item, index) => (
                            <div key={index}>
                                <dt>{item.property}:</dt>
                                <dd>{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            }
        </label>
    );
};

export default RadioButton;