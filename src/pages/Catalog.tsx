import { useEffect, useState } from "react";
import { PageTop } from "../components";
import { Pages } from "../enums/Page";
import { CatalogFilters } from "../modules";
import { Section } from "../interfaces/Section";
import { Collection } from "../enums/Collection";
import { getCollectionItems } from "../utils/getCollectionItems";
import { ClassName } from "../enums/ClassName";
import { generatePageClassName } from "../utils/generatePageClassName";

const Catalog = () => {
    const [catalogProducts, setCatalogProducts] = useState<Section[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.Products, setCatalogProducts);
    }, []);

    return (
        <main className={generatePageClassName()}>
            <div className={ClassName.Container}>
                <PageTop path={Pages.Catalog.path} title={Pages.Catalog.title} />
                <CatalogFilters />
            </div>
        </main>
    );
};

export default Catalog;