import { ReactNode } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../../enums/ButtonStyle";
import { MoreIcon } from "../icons";
import { ButtonType } from "../../enums/ButtonType";

interface Props {
    href?: string;
    className?: string;
    style?: string;
    text?: string;
    transparent?: boolean;
    icon?: ReactNode;
    icon_position_right?: boolean;
    type?: ButtonType.Submit | ButtonType.Reset;
    contact?: boolean;
    blank?: boolean;
    onClick?: any;
    city?: string;
}

const Button = ({ href, className, style, text, transparent, type, contact, icon, icon_position_right, blank, city, onClick }: Props) => {
    const content = <>
        {icon && !icon_position_right && icon}
        {text &&
            <span className="btn__text">
                {text}
            </span>
        }
        {icon_position_right && icon}
        {style === ButtonStyle.More && <MoreIcon />}
    </>

    return (
        <>
            {
                href ?
                    contact ?
                        <a href={href} target={blank ? '_blank' : undefined} rel="noreferrer" className={classNames('btn', className, style && `btn--style_${style}`, {
                            'btn--transparent': transparent
                        })}>
                            {content}
                        </a>
                        :
                        <Link to={href} className={classNames('btn', className, style && `btn--style_${style}`, {
                            'btn--transparent': transparent
                        })}>
                            {content}
                        </Link>
                    :
                    <button onClick={onClick} data-city={city ?? null} className={classNames('btn', className, style && `btn--style_${style}`, {
                        'btn--transparent': transparent
                    })} type={type || 'button'}>
                        {content}
                    </button>
            }
        </>
    );
};

export default Button;