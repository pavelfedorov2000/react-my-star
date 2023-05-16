import { Link } from "react-router-dom";
import { Pages } from "../../enums/Page";
import crumbArrow from "../../assets/images/icons/crumb-arrow.svg";

interface Props {
    profile?: boolean;
    currentPage: {
        href: string;
        title: string;
    };
}

const Breadcrumbs = ({ profile, currentPage }: Props) => {
    return (
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <ol className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <Link to="/" className="breadcrumbs__link" style={{ backgroundImage: `url(${crumbArrow})` }}>Главная</Link>
                </li>
                {profile ?
                    <li className="breadcrumbs__item">
                        <Link to={Pages.Profile.path} className="breadcrumbs__link" style={{ backgroundImage: `url(${crumbArrow})` }}>{Pages.Profile.title}</Link>
                    </li>
                    : null
                }
                <li className="breadcrumbs__item">
                    <span>{currentPage.title}</span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;