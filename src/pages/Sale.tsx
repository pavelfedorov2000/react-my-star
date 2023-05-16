import { PageTop } from "../components";
import { Page } from "../interfaces/Route";
import SaleList from "../modules/sale-list/SaleList";

const Sale = ({ path, title }: Page) => {
    return (
        <main className="page sale-page">
            <div className="container">
                <PageTop path={path} title={title} />
                <SaleList />
            </div>
        </main>
    );
};

export default Sale;