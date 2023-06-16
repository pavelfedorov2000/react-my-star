import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { FieldType as FieldTypeEnum } from "../../enums/FieldType";
import Select from "../select/Select";

interface Props extends FieldType {
    className?: string;
}

const Field = ({ className, name, label, fieldType, placeholder, value, checked, options }: Props) => {
    const baseProps = {
        className,
        name,
    };

    const inputProps = {
        ...baseProps,
        placeholder,
        label,
    }

    const selectProps = {
        ...baseProps,
        options,
    };

    console.log(fieldType === FieldTypeEnum.Checkbox);

    return (
        <>
            {fieldType === FieldTypeEnum.Select && <Select {...selectProps} />}
            {fieldType === FieldTypeEnum.Textarea && <textarea {...inputProps} className="input"></textarea>}
            {(!fieldType || fieldType === FieldTypeEnum.Checkbox || fieldType === FieldTypeEnum.Radio) &&
                <input {...inputProps}
                    className={classNames(!fieldType && 'input', className && `${className}__input`)}
                    type={fieldType || 'text'}
                    value={!checked && value ? value : undefined}
                    checked={checked ?? undefined}
                />
            }
        </>
    );
};

export default Field;

//value={!checked && value ? value : undefined}