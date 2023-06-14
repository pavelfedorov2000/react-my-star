import { DropFilter as DropFilterType } from "../../interfaces/CatalogFilter";

const DropFilter = ({ name, items }: DropFilterType) => {
    return (
        <div className="catalog-filter__drop drop-filter" id={`${name}_dropdown`} aria-labelledby={`${name}_heading`}>
            
        </div>
    );
};

export default DropFilter;