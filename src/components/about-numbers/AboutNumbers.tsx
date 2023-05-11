import classNames from "classnames";
import { Leader } from "../../interfaces/Leader";

interface Props {
    className?: string;
    items?: Leader[];
}

const AboutNumbers = ({ className, items }: Props) => {
    return (
        <dl className={classNames('about-numbers', className)}>
            {items?.map((item, index) => (
                <div key={index} className="about-numbers__item">
                    <div className="about-numbers__item-inner">
                        <dt className="about-numbers__item-property">{item.property}</dt>
                        <dd className="about-numbers__item-value">{item.value}</dd>
                    </div>
                </div>
            ))}
        </dl>
    );
};

export default AboutNumbers;