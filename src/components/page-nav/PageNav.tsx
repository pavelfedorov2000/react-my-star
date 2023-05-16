import { useRouteMatch } from "react-router";
import { SubPages } from "../../enums/Page";
import { Button } from "../../ui";
import classNames from "classnames";

const PageNav = () => {
    const { url } = useRouteMatch();

    return (
        <nav className="page-nav profile-page__nav">
			<ul className="page-nav__list">
                {Object.values(SubPages).map((page) => (
                    <li key={page.path.toString()} className="page-nav__item">
                        <Button href={page.path} className={classNames('page-nav__link', {
                            'active': page.path === url
                        })} text={page.title} transparent />
                    </li>
                ))}
			</ul>
		</nav>
    );
};

export default PageNav;