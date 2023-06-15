import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";

interface Props {
    min?: number;
    max: number;
    start: [number, number];
    onChange?: (from: number, to: number) => void;
}

const RangeSlider = ({ min, max, start, onChange }: Props) => {
    const [rangeValueFrom, setRangeValueFrom] = useState(start[0]);
    const [rangeValueTo, setRangeValueTo] = useState(start[1]);

    const handleChange = (value: any) => {
        setRangeValueFrom(value[0]);
        setRangeValueTo(value[1]);
        onChange && onChange(value[0], value[1]);
    }

    return (
        <fieldset className="range-filter__item range-filter__item--width">
            <legend className="range-filter__title">Ширина</legend>
            <Nouislider range={{ min: min ?? 0, max: max }} start={start} connect onSlide={handleChange} />
            <div className="range-filter__labels">
                <span className="range-filter__label">{min ?? 0}</span>
                <span className="range-filter__label">{min ?? 1000}</span>
            </div>
            <div className="range-inputs">
                <div className="range-inputs__item">
                    <span>от</span>
                    <input className="range-inputs__input range-inputs__input--min" type="number" max={min ?? 0} value={rangeValueFrom} />
                </div>
                <div className="range-inputs__item">
                    <span>до</span>
                    <input className="range-inputs__input range-inputs__input--max" type="number" max={max ?? 1000} value={rangeValueTo} />
                </div>
            </div>
        </fieldset>
    );
};

export default RangeSlider;