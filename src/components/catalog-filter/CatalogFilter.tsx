import { useState, useRef } from "react";
import { CatalogFilter as CatalogFilterType } from "../../interfaces/CatalogFilter";
import { ToggleArrowIcon } from "../../ui/icons";
import DropFilter from "../drop-filter/DropFilter";
import useHandleOutsideClick from "../../hooks/useHandleOutsideClick";

const mainClass = 'catalog-filter';

const CatalogFilter = ({ name, title, items, ranges, fieldType }: CatalogFilterType) => {
    const filterRef = useRef<HTMLFieldSetElement>(null);
    const [visible, setVisible] = useState(false);

    const childrenProps = {
        name,
        items,
        ranges,
        fieldType,
        visible: visible
    };

    useHandleOutsideClick(filterRef, setVisible);

    return (
        <fieldset ref={filterRef} className={`${mainClass}`}>
            <legend className={`${mainClass}__title`}>
                <button className={`${mainClass}__toggle`}
                    onClick={() => setVisible((v) => !v)}
                    id={`${name}_filter_heading`}
                    aria-expanded={visible}
                    aria-controls={`${name}_filter_dropdown`}
                    type="button">
                    <span className={`${mainClass}__toggle-text`}>{title}</span>
                    <ToggleArrowIcon />
                </button>
            </legend>
            <DropFilter {...childrenProps} isActive={visible} />
        </fieldset>
    );
};

export default CatalogFilter;