import { useState } from "react";
import dropArrow from "../../assets/images/icons/drop-arrow.svg";
import classNames from "classnames";
import { Field } from "../../interfaces/Field";

interface Props extends Field {
    className?: string;
}

const Select = ({ className, name, options }: Props) => {
    const [active, setActive] = useState(false);

    const handleToggleSelect = () => {
        setActive((prevState) => !prevState);
    }

    return (
        <div className={classNames('select', className)}>
            <button onClick={handleToggleSelect} className="select__toggle default" type="button" aria-expanded={active}>
                <span>{options?.find((option) => option.selected)?.text}</span>
                <span className="select__arrow" style={{ backgroundImage: `url(${dropArrow})` }}></span>
            </button>
			<div className="select__content">
                {options?.map((option ,index) => (
                    <div key={index} className="select__option">
                        <input id={`${name}_${index}`} className="select__input" type="radio" name={name} checked={option.selected ? true : false} />
                        <label htmlFor={`${name}_${index}`} tabIndex={0} className="select__label">{option.text}</label>
                    </div>
                ))}
			</div>
		</div>
    );
};

export default Select;