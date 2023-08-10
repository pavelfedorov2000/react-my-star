import { PopularCategory } from "../../components";
import { POPULAR_CATALOG_CATEGORIES } from "../../constants/catalog-categories";
import { generateRowClassName } from "../../utils/generateRowClassName";

const BASE_COUNT = 6;
const mainClass = 'popular-categories';

const PopularCategories = () => {
    return (
        <section className={`section ${mainClass}`}>
            <div className="section__top">
                <h2 className="section-title">Популярные категории</h2>
            </div>
            <ul className={generateRowClassName(mainClass, 4)}>
                {POPULAR_CATALOG_CATEGORIES.map((category, index) => (
                    <li key={index}>
                        <PopularCategory {...category} index={index} count={BASE_COUNT} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PopularCategories;