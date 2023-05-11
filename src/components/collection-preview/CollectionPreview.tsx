import { Link } from "react-router-dom"
import { Img } from "../../ui";
import { CatalogCategory } from "../../interfaces/CatalogCategory";

interface Props extends CatalogCategory {
    index: number;
    count: number;
}

const CollectionPreview = ({ img, title, index, count }: Props) => {
    return (
        <article className="collection-preview">
            <Link to={`/catalog`} className="collection-preview__inner">
                <figure className="collection-preview__picture">
                    <Img {...img} className="collection-preview__img" width={676} height={(index % count === 2 || index % count === 4) ? 934 : 447} cover />
                </figure>
                <h3 className="collection-preview__title">
                    {title}
                </h3>
            </Link>
        </article>
    );
};

export default CollectionPreview;