import closeIcon from '../../assets/images/icons/close-filters.svg';
import { CatalogFilter } from "../../components";
import { CATALOG_FILTERS } from "../../constants/catalog-filters";
import { ButtonType } from "../../enums/ButtonType";
import { Button } from "../../ui";
import FiltersResult from '../filters-result/FiltersResult';

const mainClass = 'catalog-filters';

const CatalogFilters = () => {
    return (
        <form action="#" className={`${mainClass}`}>
            <div className={`${mainClass}__body`}>
                <button className={`${mainClass}__close`} type="button">
                    <img src={closeIcon} alt="" width="30" height="30" loading="lazy" />
                </button>
                <div className={`${mainClass}__title`}>Фильтры</div>
                <div className={`${mainClass}__row`}>
                    <div className={`${mainClass}__inner`}>
                        {CATALOG_FILTERS.map((filter) => (
                            <CatalogFilter {...filter} />
                        ))}
                    </div>
                    <div className={`${mainClass}__buttons`}>
                        <Button className={`${mainClass}__btn`} style="bg-gray" text="Очистить все" type={ButtonType.Reset} />
                        <Button className={`${mainClass}__btn ${mainClass}__show-btn`} style="bg-gray" text={`Смотреть (506)`} />
                    </div>
                    <FiltersResult className={`${mainClass}__result`} />
                </div>
            </div>
        </form>
    );
};

export default CatalogFilters;