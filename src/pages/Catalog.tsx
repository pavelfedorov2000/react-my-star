import { PageTop } from "../components";
import { Pages } from "../enums/Page";
import { CatalogFilters } from "../modules";

const Catalog = () => {
    return (
        <main className="page">
            <div className="container">
                <PageTop path={Pages.Catalog.path} title={Pages.Catalog.title} />
                <CatalogFilters />
            </div>
        </main>
    );
};

export default Catalog;