import classNames from "classnames";

interface Props {
    className?: string;
}

const FormAgree = ({ className }: Props) => {
    return (
        <div className={classNames('form-agree', className)}>
            * Нажимая кнопку отправить я даю свое согласие на обработку персональных данных
        </div>
    );
};

export default FormAgree;