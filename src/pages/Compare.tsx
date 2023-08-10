import { PageTop } from "../components";
import { ClassName } from "../enums/ClassName";
import { PageTop as PageTopType } from "../interfaces/Route";
import { CompareTable } from "../modules";

const Compare = ({ path, title }: PageTopType) => {
    return (
        <main className={ClassName.Page}>
            <div className={ClassName.Container}>
                <PageTop path={path} title={title} btn={{ className: 'remove-compare', style: 'bg-gray', text: 'Очистить сравнение' }} />
                <CompareTable />
            </div>
        </main>
    );
};

export default Compare;