import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { FieldType as FieldTypeEnum } from "../../enums/FieldType";
import Select from "../select/Select";

interface Props extends FieldType {
    className?: string;
}

const Field = ({ className, name, fieldType, placeholder, value, checked, options }: Props) => {
    return (
        <>
            {fieldType === FieldTypeEnum.Textarea && <textarea className="input" name={name} placeholder={placeholder}></textarea>}
            {fieldType === FieldTypeEnum.Select && <Select className={className} name={name} options={options} />}
            {!fieldType &&
                <input className={classNames('input', className && `${className}__input`)}
                    name={name}
                    type={fieldType || 'text'}
                    placeholder={placeholder}
                    value={!checked && value ? value : undefined}
                    checked={checked ?? undefined}
                />
            }
        </>
    );
};

export default Field;