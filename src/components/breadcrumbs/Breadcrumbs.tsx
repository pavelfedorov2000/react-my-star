import { Link } from "react-router-dom";
import { Pages } from "../../enums/Page";
import crumbArrow from "../../assets/images/icons/crumb-arrow.svg";

const mainClass = 'breadcrumbs';

interface Props {
    profile?: boolean;
    currentPage: {
        href: string;
        title: string;
    };
}

const Breadcrumbs = ({ profile, currentPage }: Props) => {
    return (
        <nav className={mainClass} aria-label="Хлебные крошки">
            <ol className={`${mainClass}__list`}>
                <li className={`${mainClass}__item`}>
                    <Link to="/" className={`${mainClass}__link`} style={{ backgroundImage: `url(${crumbArrow})` }}>Главная</Link>
                </li>
                {profile ?
                    <li className={`${mainClass}__item`}>
                        <Link to={Pages.Profile.path} className={`${mainClass}__link`} style={{ backgroundImage: `url(${crumbArrow})` }}>{Pages.Profile.title}</Link>
                    </li>
                    : null
                }
                <li className={`${mainClass}__item`}>
                    <span>{currentPage.title}</span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;