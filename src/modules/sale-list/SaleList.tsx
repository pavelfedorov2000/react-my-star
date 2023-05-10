import { useEffect, useState } from "react";
import { SaleArticle as SaleArticleType } from "../../interfaces/SaleArticle";
import SaleArticle from "../../components/sale-article/SaleArticle";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const SaleList = () => {
    const [saleItems, setSaleItems] = useState<SaleArticleType[]>([]);
    useEffect(() => {
        const getSaleItems = async () => {
            const colRef = collection(db, "promotions");
            const docsSnap = await getDocs(colRef) as any;
            docsSnap.forEach((doc: any) => {
                setSaleItems((prev) => {
                    if (prev.findIndex((item) => item.id === doc.id) !== -1) {
                        return [
                            ...prev
                        ]
                    }
                    
                    return [
                        ...prev,
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    ]
                });
            });
        }
        getSaleItems();
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