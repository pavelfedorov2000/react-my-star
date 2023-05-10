import { PageTop } from "../components";
import SaleList from "../modules/sale-list/SaleList";

const Sale = () => {
    return (
        <main className="page sale-page">
            <div className="container">
                <PageTop title="Акции" />
                <SaleList />
            </div>
        </main>
    );
};

export default Sale;