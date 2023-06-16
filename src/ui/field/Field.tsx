import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { FieldType as FieldTypeEnum } from "../../enums/FieldType";
import Select from "../select/Select";
import Checkbox from "../checkbox/Checkbox";
import RadioButton from "../radiobutton/RadioButton";

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

    const checkProps = {
        ...baseProps,
        checked,
    };

    const selectProps = {
        ...baseProps,
        options,
    };

    return (
        <>
            {fieldType === FieldTypeEnum.Checkbox && <Checkbox {...checkProps} />}
            {fieldType === FieldTypeEnum.Radio && <RadioButton {...checkProps} />}
            {fieldType === FieldTypeEnum.Select && <Select {...selectProps} />}
            {fieldType === FieldTypeEnum.Textarea && <textarea {...inputProps} className="input"></textarea>}
            {!fieldType &&
                <input {...inputProps}
                    className={classNames('input', className && `${className}__input`)}
                    type={fieldType || 'text'}
                    value={value ?? undefined}
                    checked={checked ?? undefined}
                />
            }
        </>
    );
};

export default Field;

//value={!checked && value ? value : undefined}