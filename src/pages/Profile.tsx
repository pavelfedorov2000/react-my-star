import { PageNav } from "../components";
import { PageTop } from "../components";
import { ClassName } from "../enums/ClassName";
import { Route } from "../interfaces/Route";
import { generatePageClassName } from "../utils/generatePageClassName";
import { generateRowClassName } from "../utils/generateRowClassName";

const pageName = 'profile';
const mainClass = `${pageName}-${ClassName.Page}`;

const Profile = ({ path, title, emptyBlock, SubPage }: Route) => {
    return (
        <main className={generatePageClassName(pageName)}>
            <div className={ClassName.Container}>
                <PageTop path={path} title="Профиль" divTitle />
                <div className={generateRowClassName(mainClass)}>
                    <PageNav />
                    <div className={`${mainClass}__body`}>
                        <h2 className={`${mainClass}__title`}>{title}</h2>
                        <SubPage emptyBlock={emptyBlock} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;