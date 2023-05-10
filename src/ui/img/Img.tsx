import classNames from "classnames";

interface Props {
    className?: string;
    cover?: boolean;
    contain?: boolean;
    src: string;
    format?: 'jpg' | 'png' | 'svg';
    alt?: string;
    width: string | number;
    height: string | number;
}

const Img = ({ className, cover, contain, src, alt, width, height }: Props) => {
    return (
        <img className={classNames(className, {
            'img-cover': cover,
            'img-contain': contain
        })} src={src} alt={alt || ""} width={width} height={height} loading="lazy" />
    );
};

export default Img;