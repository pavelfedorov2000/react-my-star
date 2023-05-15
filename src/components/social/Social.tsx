import classNames from "classnames";
import { SOCIALS } from "../../constants/socials";

interface Props {
    className?: string;
    filterParam?: string;
}

const Social = ({ className, filterParam }: Props) => {
    return (
        <ul className={classNames('social', className && `${className}__social`)}>
            {SOCIALS.filter((social) => social.place !== filterParam).map((social) => (
                <li key={social.name} className="social__item">
                    <a className="social__link" href={social.link.href} target="_blank" rel="nofollow">
                        <social.svg />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Social;