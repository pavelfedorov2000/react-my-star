import { Link } from "react-router-dom";
import { CATALOG_CATEGORIES } from "../../constants/catalog-categories";

const mainClass = 'categories-menu';
const dropMenuClass = 'categories-menu-drop';

const CategoriesMenu = () => {
    return (
        <ul className={`container ${mainClass}`}>
            {CATALOG_CATEGORIES.map((category) => (
                <li key={category.order} className={`${mainClass}__item`}>
                    <div className={`${mainClass}__link`}>
                        {category.icon}
                        <Link to={`/catalog/${category.href}`}>{category.title}</Link>
                        <button className={`${mainClass}__drop-btn`} type="button" aria-label="Открыть подменю"
                            aria-expanded="false"></button>
                    </div>
                    {category.subcategories &&
                        <div className={`${dropMenuClass}`}>
                            <div className={`${dropMenuClass}__top`}>
                                <button className={`${mainClass}`}
                                    type="button"
                                    aria-label="Закрыть подменю"></button>
                                {category.icon}
                                <Link to={`/catalog/${category.href}`}>{category.title}</Link>
                            </div>
                            <ul className={`${dropMenuClass}__list`}>
                                {category.subcategories.map((subcategory, index) => (
                                    <li key={index} className={`${dropMenuClass}__item`}>
                                        <Link to={`/catalog/${subcategory.href}`} className={`${dropMenuClass}__link`}>
                                            {subcategory.icon}
                                            <span>{subcategory.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </li>
            ))}
        </ul>
    );
};

export default CategoriesMenu;