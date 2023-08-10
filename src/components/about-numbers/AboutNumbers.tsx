import classNames from "classnames";
import { LeaderItem } from "../../interfaces/Leader";
import { WithClassName } from "../../types/types";

const mainClass = 'about-numbers';
const itemClass = `${mainClass}__item`;

interface Props extends WithClassName {
    items?: LeaderItem[];
}

const AboutNumbers = ({ className, items }: Props) => {
    return (
        <dl className={classNames(mainClass, className)}>
            {items?.map((item, index) => (
                <div key={index} className={`${itemClass}`}>
                    <div className={`${itemClass}-inner`}>
                        <dt className={`${itemClass}-property`}>{item.property}</dt>
                        <dd className={`${itemClass}-value`}>{item.value}</dd>
                    </div>
                </div>
            ))}
        </dl>
    );
};

export default AboutNumbers;