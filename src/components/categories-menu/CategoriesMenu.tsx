import { Link } from "react-router-dom";
import { CATALOG_CATEGORIES } from "../../constants/catalog-categories";

const CategoriesMenu = () => {
    return (
        <ul className="categories-menu container">
            {CATALOG_CATEGORIES.map((category) => (
                <li key={category.order} className="categories-menu__item">
                    <div className="categories-menu__link">
                        {category.icon}
                        <Link to={`/catalog/${category.href}`}>{category.title}</Link>
                        <button className="categories-menu__drop-btn" type="button" aria-label="Открыть подменю"
                            aria-expanded="false"></button>
                    </div>
                    {category.subcategories &&
                        <div className="categories-menu-drop">
                            <div className="categories-menu-drop__top">
                                <button className="categories-menu__back-btn"
                                        type="button"
                                        aria-label="Закрыть подменю"></button>
                                {category.icon}
                                <Link to={`/catalog/${category.href}`}>{category.title}</Link>
                            </div>
                            <ul className="categories-menu-drop__list">
                                {category.subcategories.map((subcategory) => (
                                    <li className="categories-menu-drop__item">
                                        <Link to={`/catalog/${subcategory.href}`} className="categories-menu-drop__link">
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