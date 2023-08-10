import classNames from "classnames";
import discountBorder from "../../assets/images/discount-border.svg";

const mainClass = 'discounts-progress';
const completedClass = 'completed';
const discounts = [0, 3, 5, 7, 10, 13, 15, 17, 20];

const DiscountsProgress = () => {
    return (
        <ol className={`${mainClass}`}>
            {discounts.map((discount, index) => (
                <li key={discount} className={classNames(`${mainClass}__item`, {
                    [`${completedClass}`]: index === 0
                })} style={{ backgroundImage: `url(${discountBorder})` }}>{discount}%</li>
            ))}
        </ol>
    );
};

export default DiscountsProgress;