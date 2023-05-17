import classNames from "classnames";
import { Button, Field } from "../../ui";
import { FieldType } from "../../enums/FieldType";
import { MinusIcon, PlusIcon } from "../../ui/icons";

interface Props {
    className?: string;
}

const Counter = ({ className }: Props) => {
    return (
        <div className={classNames('counter', className)}>
            <Button className="counter__btn action-btn counter__btn--minus" icon={<MinusIcon />} ariaLabel="Минус один товар" />
            <Field className="counter" name="counter" fieldType={FieldType.Number} value={1} />
            <Button className="counter__btn action-btn counter__btn--plus" icon={<PlusIcon />} ariaLabel="Плюс один товар" />
        </div>
    );
};

export default Counter;