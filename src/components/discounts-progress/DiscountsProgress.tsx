import classNames from "classnames";
import discountBorder from "../../assets/images/icons/color.png";

const discounts = [0, 3, 5, 7, 10, 13, 15, 17, 20];

const DiscountsProgress = () => {
    return (
        <ol className="discounts-progress">
            {discounts.map((discount, index) => (
                <li key={discount} className={classNames('discounts-progress__item', {
                    'completed': index === 0
                })} style={{ backgroundImage: `url(${discountBorder})` }}>{discount}%</li>
            ))}
        </ol>
    );
};

export default DiscountsProgress;