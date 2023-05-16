import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { Field } from "../../ui";

interface Props extends FieldType {
    className?: string;
}

const FormItem = ({ className, name, fieldType, label, placeholder, required }: Props) => {
    return (
        <label className={classNames('form-item', className)}>
            <Field name={name} fieldType={fieldType} placeholder={placeholder} />
            {label && <span className="form-label">{label}{required && '*'}</span>}
        </label>
    );
};

export default FormItem;