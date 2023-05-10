import { useEffect, useState } from "react";
import { SaleArticle as SaleArticleType } from "../../interfaces/SaleArticle";
import SaleArticle from "../../components/sale-article/SaleArticle";
import { getCollectionItems } from "../../utils/getCollectionItems";
import { Collection } from "../../enums/Collection";

const SaleList = () => {
    const [saleItems, setSaleItems] = useState<SaleArticleType[]>([]);
    useEffect(() => {
        getCollectionItems(Collection.Promotions, setSaleItems);
    }, []);

    return (
        <ul className="sale-list">
            {saleItems.map((item) => (
                <li key={item.id}>
                    <SaleArticle {...item} />
                </li>
            ))}
        </ul>
    );
};

export default SaleList;