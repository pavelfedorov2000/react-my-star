import { Leader as LeaderType } from "../../interfaces/Leader";

interface Props extends LeaderType {
    className?: string;
}

const Leader = ({ className, items }: Props) => {
    return (
        <dl className={className}>
            {items.map((item, index) => (
                <div key={index}>
                    <dt>{item.property}:</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
};

export default Leader;