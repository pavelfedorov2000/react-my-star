import classNames from "classnames";
import { Button, Field } from "../../ui";
import { SubmitArrowIcon } from "../../ui/icons";
import { PromocodeStatus } from "../../enums/PromocodeStatus";

interface Props {
    status: PromocodeStatus.Success | PromocodeStatus.Error;
}

const PromocodeForm = ({ status }: Props) => {
    return (
        <div className="promocode-form">
            <Field className="promocode-form" name="promocode" placeholder="Введите промокод" />
            <div className="promocode-form__status">
                <span className={classNames('promocode-form__status', {
                    [PromocodeStatus.Success]: status === PromocodeStatus.Success,
                    [PromocodeStatus.Error]: status === PromocodeStatus.Error,
                })}>Промокод {status === PromocodeStatus.Success ? 'применен' : 'не активен'}</span>
            </div>
            <Button className="promocode-form__btn" ariaLabel="Применить промокод" icon={<SubmitArrowIcon />} transparent />
        </div>
    );
};

export default PromocodeForm;