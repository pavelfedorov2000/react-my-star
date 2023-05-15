import classNames from "classnames";
import { FieldType } from "../../enums/FieldType";
import { Field as IField } from "../../interfaces/Field";
import Field from "../field/Field";

interface Props extends IField {
    className?: string;
}

const Checkbox = ({ className, name, label }: Props) => {
    return (
        <label className={classNames('checkbox', className)}>
            <Field className="checkbox" name={name} fieldType={FieldType.Checkbox} />
            <span className="checkbox__style"></span>
            {label && <span className="checkbox__text">{label}</span>}
        </label>
    );
};

export default Checkbox;