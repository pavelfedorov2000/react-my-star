import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { FieldType as FieldTypeEnum } from "../../enums/FieldType";

interface Props extends FieldType {
    className?: string;
}

const Field = ({ className, name, fieldType, label, placeholder }: Props) => {
    return (
        <label className={classNames('form-item', className)}>
            {fieldType === FieldTypeEnum.Textarea ?
                <textarea className="input" name={name} placeholder={placeholder}></textarea>
                :
                <>
                    <input className="input feedback-form__input"
                        name={name}
                        type={fieldType || 'text'}
                        placeholder={placeholder} />
                    {label && <span className="form-label">{label}</span>}
                </>
            }
        </label>
    );
};

export default Field;