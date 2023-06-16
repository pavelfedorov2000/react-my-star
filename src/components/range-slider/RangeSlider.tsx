import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";
import { RangeSlider as RangeSliderType } from "../../interfaces/RangeSlider";

interface Props extends RangeSliderType {
    onChange?: (from: number, to: number) => void;
}

const RangeSlider = ({ name, title, prefix, min, max, onChange }: Props) => {
    const [rangeValueFrom, setRangeValueFrom] = useState(min);
    const [rangeValueTo, setRangeValueTo] = useState(max);

    const handleChange = (value: any) => {
        setRangeValueFrom(value[0]);
        setRangeValueTo(value[1]);
        onChange && onChange(value[0], value[1]);
    }

    return (
        <fieldset className="range-filter__item">
            {title && <legend className="range-filter__title">{title}</legend>}
            <Nouislider range={{ min: min ?? 0, max: max }} start={min ?? 0} connect onSlide={handleChange} />
            <div className="range-filter__labels">
                <span className="range-filter__label">{min ?? 0} {prefix}</span>
                <span className="range-filter__label">{max} {prefix}</span>
            </div>
            <div className="range-inputs">
                <div className="range-inputs__item">
                    <span>от</span>
                    <input className="range-inputs__input range-inputs__input--min" name={`${name}-min`} type="number" min={min ?? 0} max={max} value={rangeValueFrom} />
                </div>
                <div className="range-inputs__item">
                    <span>до</span>
                    <input className="range-inputs__input range-inputs__input--max" name={`${name}-max`} type="number" min={min ?? 0} max={max} value={rangeValueTo} />
                </div>
            </div>
        </fieldset>
    );
};

export default RangeSlider;