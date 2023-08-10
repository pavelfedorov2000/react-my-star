import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { Field } from "../../ui";

const FormItem = ({ className, name, fieldType, label, placeholder, required }: FieldType) => {
    return (
        <label className={classNames('form-item', className)}>
            <Field name={name} fieldType={fieldType} placeholder={placeholder} />
            {label && <span className="form-label">{label}{required && '*'}</span>}
        </label>
    );
};

export default FormItem;