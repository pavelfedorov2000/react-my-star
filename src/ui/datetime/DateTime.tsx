import { formatDateTime } from "../../utils/formatDateTime";

interface Props {
    className?: string;
    date: string;
    time?: string;
}

const DateTime = ({ className, date }: Props) => {
    return (
        <time className={className} dateTime={formatDateTime(date)}>{date}</time>
    );
};

export default DateTime;