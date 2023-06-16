//import closeIcon from 'assets/images/icons/close-filters.svg';

import { CatalogFilter } from "../../components";
import { CATALOG_FILTERS } from "../../constants/catalog-filters";
import { ButtonType } from "../../enums/ButtonType";
import { Button } from "../../ui";

const CatalogFilters = () => {
    return (
        <form action="#" className="catalog-filters">
            <div className="catalog-filters__body">
                <button className="catalog-filters__close" type="button">
                    <img src="assets/images/icons/close-filters.svg" alt="" width="30" height="30" loading="lazy" />
                </button>
                <div className="catalog-filters__title">Фильтры</div>
                <div className="catalog-filters__row">
                    <div className="catalog-filters__inner">
                        {CATALOG_FILTERS.map((filter) => (
                            <CatalogFilter {...filter} />
                        ))}
                    </div>
                    <div className="catalog-filters__buttons">
                        <Button className="catalog-filters__btn" style="bg-gray" text="Очистить все" type={ButtonType.Reset} />
                        <Button className="catalog-filters__btn catalog-filters__show-btn" style="bg-gray" text={`Смотреть (506)`} />
                    </div>
                    <div className="catalog-filters__result filters-result">
                        <div className="filters-result__title">Найдено:</div>
                        <div className="filters-result__value">506 товаров</div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CatalogFilters;