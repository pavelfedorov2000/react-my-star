import classNames from "classnames";
import { Badge as BadgeType } from "../../interfaces/Badge";
import { Badge } from "../../ui";

interface Props {
    className?: string;
    items: BadgeType[];
}

const Badges = ({ className, items }: Props) => {
    return (
        <ul className={classNames('badges', className)}>
            {items.map((item, index) => (
                <li key={index}>
                    <Badge {...item} />
                </li>
            ))}
        </ul>
    );
};

export default Badges;