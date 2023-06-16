import { CatalogFilter as CatalogFilterType } from "../../interfaces/CatalogFilter";
import { ToggleArrowIcon } from "../../ui/icons";
import DropFilter from "../drop-filter/DropFilter";

const CatalogFilter = ({ name, title, items, fieldType }: CatalogFilterType) => {
    const childrenProps = {
        name,
        items,
        fieldType
    };

    return (
        <fieldset className="catalog-filter">
            <legend className="catalog-filter__title">
                <button className="catalog-filter__toggle"
                    type="button"
                    aria-expanded="false"
                    aria-controls={`${name}_filter_dropdown`}
                    id={`${name}_filter_heading`}>
                    <span className="catalog-filter__toggle-text">{title}</span>
                    <ToggleArrowIcon />
                </button>
            </legend>
            <DropFilter {...childrenProps} />
        </fieldset>
    );
};

export default CatalogFilter;