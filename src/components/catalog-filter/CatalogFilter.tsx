import { CatalogFilter as CatalogFilterType } from "../../interfaces/CatalogFilter";
import { ToggleArrowIcon } from "../../ui/icons";
import DropFilter from "../drop-filter/DropFilter";

const CatalogFilter = ({ name, toggleText, items }: CatalogFilterType) => {
    return (
        <fieldset className="catalog-filter">
            <legend className="catalog-filter__title">
                <button className="catalog-filter__toggle"
                        type="button"
                        aria-expanded="false"
                        aria-controls={`${name}_dropdown`}
                        id={`${name}_heading`}>
                    <span className="catalog-filter__toggle-text">{toggleText}</span>
                    <ToggleArrowIcon />
                </button>
            </legend>
            <DropFilter name={name} items={items} />
        </fieldset>
    );
};

export default CatalogFilter;