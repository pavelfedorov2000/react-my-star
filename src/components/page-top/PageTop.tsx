interface Props {
    title: string;
}

const PageTop = ({ title }: Props) => {
    return (
        <div className="page-top">
            <h1 className="section-title">
                {title}
            </h1>
        </div>
    );
};

export default PageTop;