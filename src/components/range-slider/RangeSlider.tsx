import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";
import { RangeSlider as RangeSliderType } from "../../interfaces/RangeSlider";

const RangeSlider = ({ name, title, prefix, min, max, onChange }: RangeSliderType) => {
    const [rangeValueFrom, setRangeValueFrom] = useState(min);
    const [rangeValueTo, setRangeValueTo] = useState(max);

    const handleFromInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValueFrom(+event.target.value);
    }

    const handleToInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValueTo(+event.target.value);
    }

    const handleChange = (value: any) => {
        setRangeValueFrom(Math.floor(value[0]));
        setRangeValueTo(Math.floor(value[1]));
        onChange && onChange(value[0], value[1]);
    }

    return (
        <fieldset className="range-filter__item">
            {title && <legend className="range-filter__title">{title}</legend>}
            <Nouislider range={{ min: min, max: max }} start={[rangeValueFrom, rangeValueTo]} connect onSlide={handleChange} />
            <div className="range-filter__labels">
                <span className="range-filter__label">{min} {prefix}</span>
                <span className="range-filter__label">{max} {prefix}</span>
            </div>
            <div className="range-inputs">
                <div className="range-inputs__item">
                    <span>от</span>
                    <input className="range-inputs__input range-inputs__input--min" name={`${name}-min`} min={min} value={rangeValueFrom} onChange={handleFromInputChange} />
                </div>
                <div className="range-inputs__item">
                    <span>до</span>
                    <input className="range-inputs__input range-inputs__input--max" name={`${name}-max`} max={max} value={rangeValueTo} onChange={handleToInputChange} />
                </div>
            </div>
        </fieldset>
    );
};

export default RangeSlider;