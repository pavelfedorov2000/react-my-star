import { Link } from "react-router-dom"
import { Img } from "../../ui";
import { CatalogCategory } from "../../interfaces/CatalogCategory";
import { useMemo } from "react";

const mainClass = 'collection-preview';

interface Props extends CatalogCategory {
    index: number;
    count: number;
}

const CollectionPreview = ({ img, title, index, count }: Props) => {
    const calculatedImgHeight = useMemo(() => {
        return (index % count === 2 || index % count === 4) ? 934 : 447;
    }, [index, count]);

    return (
        <article className={`${mainClass}`}>
            <Link to={`/catalog`} className={`${mainClass}__inner`}>
                <figure className={`${mainClass}__picture`}>
                    <Img {...img} className={`${mainClass}__img`} width={676} height={calculatedImgHeight} cover />
                </figure>
                <h3 className={`${mainClass}__title`}>
                    {title}
                </h3>
            </Link>
        </article>
    );
};

export default CollectionPreview;