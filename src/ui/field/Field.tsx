import { Field as FieldType } from "../../interfaces/Field";

interface Props extends FieldType {
    className?: string;
}

const Field = ({ className, name, fieldType, label, placeholder }: Props) => {
    return (
        <label className="feedback-form__item form-item">
            <input className="input feedback-form__input"
                name={name}
                type={fieldType || 'text'}
                placeholder={placeholder} />
            {label && <span className="form-label">{label}</span>}
        </label>
    );
};

export default Field;