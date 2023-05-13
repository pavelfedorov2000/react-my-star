import { PopularCategory } from "../../components";
import { POPULAR_CATALOG_CATEGORIES } from "../../constants/catalog-categories";

const BASE_COUNT = 6;

const PopularCategories = () => {
    return (
        <section className="section popular-categories">
            <div className="section__top">
                <h2 className="section-title">Популярные категории</h2>
            </div>
            <ul className="row popular-categories__grid row--4">
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