import classNames from "classnames";
import { DropFilter as DropFilterType } from "../../interfaces/CatalogFilter";
import { FieldType } from "../../enums/FieldType";
import RangeSlider from "../range-slider/RangeSlider";
import { Checkbox, RadioButton } from "../../ui";

const mainClass = 'drop-filter';
const rangeClass = 'range-filter';

const DropFilter = ({ isActive, name, items, ranges, fieldType }: DropFilterType) => {
    return (
        <div className={classNames('catalog-filter__drop', mainClass, {
            [`${rangeClass}`]: fieldType === FieldType.Range,
            'active': isActive
        })} id={`${name}_filter_dropdown`} aria-labelledby={`${name}_filter_heading`}>
            {fieldType === FieldType.Range ?
                <div className={`${rangeClass}`}>
                    {ranges?.map((range, index) => (
                        <RangeSlider key={index} {...range} />
                    ))}
                </div>
                :
                <div className={`${mainClass}__items`}>
                    {items?.map((item, index) => (
                        fieldType === FieldType.Radio
                            ? <RadioButton key={index} {...item} className={`${mainClass}__item`} style="link" />
                            : <Checkbox key={index} {...item} className={`${mainClass}__item`} />
                    ))}
                </div>
            }
        </div>
    );
};

export default DropFilter;