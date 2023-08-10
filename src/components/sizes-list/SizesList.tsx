import { Leader } from "../../interfaces/Leader";

const mainClass = 'sizes-list';

const SizesList = ({ className, items }: Leader) => {
    return (
        <dl className={`${mainClass}, ${className}`}>
            {items.map((item, index) => (
                <div key={index}>
                    <dt>{item.property}</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default SizesList;