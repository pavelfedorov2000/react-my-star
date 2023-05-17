import classNames from "classnames";

interface Props {
    className?: string;
    price: number;
    oldPrice?: number;
}

const Prices = ({ className, price, oldPrice }: Props) => {
    return (
        <div className={classNames('prices', `${className}__prices`)}>
            <div className="price cart-item__price">{price} руб.</div>
            <div className="old-price">{oldPrice} руб.</div>
        </div>
    );
};

export default Prices;