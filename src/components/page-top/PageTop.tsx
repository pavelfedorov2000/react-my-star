import { PageTop as PageTopType } from "../../interfaces/Route";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const PageTop = ({ path, title, profile, divTitle }: PageTopType) => {
    return (
        <>
            <Breadcrumbs currentPage={{ href: path, title: title }} profile={profile} />
            <div className="page-top">
                {!divTitle ?
                    <div className="section-title">
                        {title}
                    </div>
                    :
                    <h1 className="section-title">
                        {title}
                    </h1>
                }
            </div>
        </>
    );
};

export default PageTop;