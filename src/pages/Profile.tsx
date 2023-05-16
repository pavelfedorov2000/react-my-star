import { PageNav } from "../components";
import { PageTop } from "../components";
import { Route } from "../interfaces/Route";

const Profile = ({ path, title, emptyBlock, SubPage }: Route) => {
    return (
        <main className="page profile-page">
            <div className="container">
                <PageTop path={path} title="Профиль" divTitle />
                <div className="row profile-page__inner">
                    <PageNav />
                    <div className="profile-page__body">
                        <h2 className="profile-page__title">{title}</h2>
                        <SubPage emptyBlock={emptyBlock} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;