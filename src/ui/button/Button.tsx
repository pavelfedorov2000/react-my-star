import { ReactNode } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../../enums/ButtonStyle";
import { MoreIcon } from "../icons";
import { ButtonType } from "../../enums/ButtonType";

interface Props {
    href?: string;
    id?: string;
    className?: string;
    style?: string;
    transparent?: boolean;
    count?: number;
    text?: string;
    icon?: ReactNode;
    icon_position_right?: boolean;
    type?: ButtonType.Submit | ButtonType.Reset;
    contact?: boolean;
    blank?: boolean;
    onClick?: any;
    city?: string;
    ariaLabel?: string;
    ariaControls?: string;
    expanded?: boolean;
    selected?: boolean;
    role?: string;
    tabIndex?: number;
}

const Button = ({ href, id, className, style, text, transparent, type, contact, icon, icon_position_right, blank, city, onClick, ariaLabel, ariaControls, expanded, selected, role, count, tabIndex }: Props) => {
    const content = <>
        {count ? <span>{count}</span> : null}
        {icon && !icon_position_right ? icon : null}
        {text &&
            <span className="btn__text">
                {text}
            </span>
        }
        {icon_position_right ? icon : null}
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
                    <button id={id} onClick={onClick} data-city={city} className={classNames('btn', className, style && `btn--style_${style}`, {
                        'btn--transparent': transparent
                    })} type={type || 'button'} aria-label={ariaLabel} aria-expanded={expanded} aria-selected={selected} aria-controls={ariaControls} role={role} tabIndex={tabIndex}>
                        {content}
                    </button>
            }
        </>
    );
};

export default Button;