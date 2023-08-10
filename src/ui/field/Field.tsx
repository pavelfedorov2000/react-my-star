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

    return (
        <>
            {fieldType === FieldTypeEnum.Select && <Select {...selectProps} />}
            {fieldType === FieldTypeEnum.Textarea && <textarea {...inputProps} className="input"></textarea>}
            {fieldType !== FieldTypeEnum.Select && fieldType !== FieldTypeEnum.Textarea &&
                <input {...inputProps}
                    className={classNames(fieldType !== FieldTypeEnum.Checkbox && fieldType !== FieldTypeEnum.Radio && 'input', className && `${className}__input`)}
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