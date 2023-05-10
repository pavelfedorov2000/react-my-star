import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
    href?: string;
    className?: string;
    style?: string;
    text?: string;
    transparent?: boolean;
    icon?: boolean;
    type?: 'submit' | 'reset' | 'button';
    contact?: boolean;
}

const Button = ({ href, className, style, text, transparent, type, contact }: Props) => {
    const content = <>
        { text && 
            <span className="btn__text">
                {text}
            </span>
        }
    </>

    return (
        <>
            {
                href ?
                    contact ? 
                        <a href={href} className={classNames('btn', className, style && `btn--style_${style}`, {
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
                    <button className={classNames('btn', className, style && `btn--style_${style}`, {
                        'btn--transparent': transparent
                    })} type={type || 'button'}>
                        {content}
                    </button>
            }
        </>
    );
};

export default Button;