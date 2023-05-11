import { Link } from "react-router-dom";
import { CatalogCategory } from "../../interfaces/CatalogCategory";
import { Img } from "../../ui";

interface Props extends CatalogCategory {
    index: number;
    count: number;
}

const PopularCategory = ({ href, img, title, index, count }: Props) => {
    return (
        <Link to={`/catalog/${href}/`} className="popular-category">
            <figure>
                <Img className="popular-category__img" {...img} width={(index % count === 0 || index % count === 5) ? 676 : 328} height={400} cover />
            </figure>
            <span className="popular-category__title">
                {title}
            </span>
        </Link>
    );
};

export default PopularCategory;