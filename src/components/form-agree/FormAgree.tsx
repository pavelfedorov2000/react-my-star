import { ReactNode } from "react";
import classNames from "classnames";
import { Checkbox } from "../../ui";

interface Props {
    className?: string;
    text?: string | ReactNode;
    check?: boolean;
}

const FormAgree = ({ className, text, check }: Props) => {
    return (
        <>
            {check ?
                <Checkbox className="form-agree" name="agree" label={text} />
                :
                <div className={classNames('form-agree', className)}>
                    {text ?? '* Нажимая кнопку отправить я даю свое согласие на обработку персональных данных'}
                </div>
            }
        </>
    );
};

export default FormAgree;