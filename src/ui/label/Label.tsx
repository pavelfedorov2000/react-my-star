interface Props {
    label: string;
}

const Label = ({ label }: Props) => {
    return (
        <span className="form-label">{label}</span>
    );
};

export default Label;