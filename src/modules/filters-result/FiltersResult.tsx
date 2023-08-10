import { WithClassName } from "../../types/types";

const mainClass = 'filters-result';

const FiltersResult = ({ className }: WithClassName) => {
    return (
        <div className={`${mainClass}, ${className}`}>
            <div className={`${mainClass}__title`}>Найдено:</div>
            <div className={`${mainClass}__value`}>506 товаров</div>
        </div>
    );
};

export default FiltersResult;