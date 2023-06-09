import { useState, useEffect } from "react";
import { CatalogCategory } from "../../interfaces/CatalogCategory";
import { getCollectionItems } from "../../utils/getCollectionItems";
import { Collection } from "../../enums/Collection";
import { CollectionPreview } from "../../components";
import { Button } from "../../ui";

const Collections = () => {
    const [allCollections, setAllCollections] = useState<CatalogCategory[]>([]);
    const visibleCollectionsCount = 6;
    const [visibleCollections, setVisibleCollections] = useState<CatalogCategory[]>([]);

    const handleLoadMore = () => {
        setVisibleCollections([
            ...visibleCollections,
            ...allCollections.slice(visibleCollectionsCount)
        ]);
    }

    useEffect(() => {
        getCollectionItems(Collection.Collections, setAllCollections);
        setVisibleCollections(allCollections.sort((a, b) => a.order - b.order).slice(0, visibleCollectionsCount));
    }, []);

    return (
        <section className="section collections">
            <div className="section__top">
                <h2 className="section-title">Наши коллекции</h2>
            </div>
            <ul className="row collections__grid row--2">
                {visibleCollections.map((collection, index) => (
                    <li key={collection.id}>
                        <CollectionPreview {...collection} index={index + 1} count={6} />
                    </li>
                ))}
            </ul>
            {visibleCollections.length < allCollections.length && <Button onClick={handleLoadMore} className="collections__more" text="Показать еще" style="more" />}
        </section>
    );
};

export default Collections;