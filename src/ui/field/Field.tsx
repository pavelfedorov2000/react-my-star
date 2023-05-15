import classNames from "classnames";
import { Field as FieldType } from "../../interfaces/Field";
import { FieldType as FieldTypeEnum } from "../../enums/FieldType";

interface Props extends FieldType {
    className?: string;
}

const Field = ({ className, name, fieldType, placeholder }: Props) => {
    return (
        <>
            {fieldType === FieldTypeEnum.Textarea ?
                <textarea className="input" name={name} placeholder={placeholder}></textarea>
                :
                <>
                    <input className={classNames('input', className && `${className}__input`)}
                        name={name}
                        type={fieldType || 'text'}
                        placeholder={placeholder} />
                </>
            }
        </>
    );
};

export default Field;