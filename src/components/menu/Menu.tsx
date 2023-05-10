import classNames from "classnames";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../ui";

interface Props {
    className?: string;
}

const Menu = ({ className }: Props) => {
    return (
        <nav className={classNames('menu', className)}>
            <ul className="header__menu-list">
                {ROUTES.filter((route) => route.inHeader).map((route, index) => (
                    <li key={route.path.toString()}>
                        <Button href={route.path} className="header__menu-link" text={`${index === 0 ? '% ' : ''}${route.title}`} style="link-2" />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;