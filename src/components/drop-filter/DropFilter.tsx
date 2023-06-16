import classNames from "classnames";
import { DropFilter as DropFilterType } from "../../interfaces/CatalogFilter";
import { FieldType } from "../../enums/FieldType";
import RangeSlider from "../range-slider/RangeSlider";
import { Checkbox, RadioButton } from "../../ui";

const DropFilter = ({ name, items, ranges, fieldType }: DropFilterType) => {
    return (
        <div className={classNames('catalog-filter__drop drop-filter', {
            'range-filter': fieldType === FieldType.Range
        })} id={`${name}_filter_dropdown`} aria-labelledby={`${name}_filter_heading`}>
            {fieldType === FieldType.Range ?
                <div className="range-filter__items">
                    {ranges?.map((range, index) => (
                        <RangeSlider key={index} {...range} />
                    ))}
                </div>
                :
                <div className="drop-filter__items">
                    {items?.map((item, index) => (
                        fieldType === FieldType.Radio
                            ? <RadioButton key={index} {...item} className="drop-filter__item" style="link" />
                            : <Checkbox key={index} {...item} className="drop-filter__item" />
                    ))}
                </div>
            }
        </div>
    );
};

export default DropFilter;