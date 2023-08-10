import classNames from "classnames";
import { Button } from "../../ui";
import { Route } from "../../interfaces/Route";
import { Pages } from "../../enums/Page";

interface Props {
    className?: string;
    items: Route[];
}

const Menu = ({ className, items }: Props) => {
    return (
        <nav className={classNames('menu', className)}>
            <ul className={`${className}-list`}>
                {items.map((route, index) => (
                    <li key={index}>
                        <Button href={route.path} className={`${className}-link`} text={`${route.path === Pages.Sale.path ? '% ' : ''}${route.title}`} style="link-2" />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;