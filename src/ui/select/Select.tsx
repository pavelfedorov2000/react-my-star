import { SelectOption } from "../../interfaces/SelectOption";
import dropArrow from "../../assets/images/icons/drop-arrow.svg";

interface Props {
    name: string;
    options: SelectOption[];
}

const Select = ({ name, options }: Props) => {
    return (
        <div className="select checkout-form__select">
            <div className="select__title default">
                <span>{options.find((option) => option.selected)?.text}</span>
                <span className="select__arrow" style={{ backgroundImage: `url(${dropArrow})` }}></span>
            </div>
			<div className="select__content">
                {options.map((option ,index) => (
                    <div key={index} className="select__option">
                        <input id={`${name}${index}`} className="select__input" type="radio" name={name} checked={option.selected ? true : false} />
                        <label htmlFor={`${name}${index}`} tabIndex={0} className="select__label">{option.text}</label>
                    </div>
                ))}
			</div>
		</div>
    );
};

export default Select;