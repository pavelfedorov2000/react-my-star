import { PageTop } from "../components";
import { PageTop as PageTopType } from "../interfaces/Route";

const Compare = ({ path, title }: PageTopType) => {
    return (
        <main className="page">
            <div className="container">
                <PageTop path={path} title={title} btn={{ style: '', text: '' }} />
            </div>
        </main>
    );
};

export default Compare;