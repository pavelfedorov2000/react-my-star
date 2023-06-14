import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from '../../assets/images/icons/color.png';
import { Img } from "../../ui";

interface Props {
    className?: string;
}

const Logo = ({ className }: Props) => {
    return (
        <Link to="/" className={classNames('logo', className)}>
            <Img className="logo__img" src={logo} alt={'logo'} width={128} height={35} />
        </Link>
    );
};

export default Logo;