import classNames from "classnames";
import { FieldType } from "../../enums/FieldType";
import { Field as IField } from "../../interfaces/Field";
import Field from "../field/Field";

interface Props extends IField {
    className?: string;
}

const RadioButton = ({ className, name, label }: Props) => {
    return (
        <label className={classNames('radiobutton', className)}>
            <Field className="radiobutton__input" name={name} fieldType={FieldType.Radio} />
            <span className="radiobutton__style"></span>
            {label && <span className="radiobutton__text">{label}</span>}
        </label>
    );
};

export default RadioButton;