import { PageTop } from "../components";
import { ClassName } from "../enums/ClassName";
import { Page } from "../interfaces/Route";
import SaleList from "../modules/sale-list/SaleList";
import { generatePageClassName } from "../utils/generatePageClassName";

const pageName = 'sale';

const Sale = ({ path, title }: Page) => {
    return (
        <main className={generatePageClassName(pageName)}>
            <div className={ClassName.Container}>
                <PageTop path={path} title={title} />
                <SaleList />
            </div>
        </main>
    );
};

export default Sale;