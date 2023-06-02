import { PageTop } from "../components";
import { PageTop as PageTopType } from "../interfaces/Route";
import { CompareTable } from "../modules";

const Compare = ({ path, title }: PageTopType) => {
    return (
        <main className="page">
            <div className="container">
                <PageTop path={path} title={title} btn={{ className: 'remove-compare', style: 'bg-gray', text: 'Очистить сравнение' }} />
                <CompareTable />
            </div>
        </main>
    );
};

export default Compare;