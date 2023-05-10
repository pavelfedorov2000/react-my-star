import classNames from "classnames";
import { Badge as BadgeType } from "../../interfaces/Badge";

interface Props extends BadgeType {
    className?: string;
    bg?: string;
}

const Badge = ({ className, bg, text }: Props) => {
    return (
        <span className={classNames('badge', className, bg && `badge--style_bg-${bg}`)}>
            <span className="badge__text">{text}</span>
        </span>
    );
};

export default Badge;