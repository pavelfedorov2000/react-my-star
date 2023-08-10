import classNames from "classnames";
import { Button, Field } from "../../ui";
import { FieldType } from "../../enums/FieldType";
import { MinusIcon, PlusIcon } from "../../ui/icons";
import { WithClassName } from "../../types/types";

const mainClass = 'counter';

const Counter = ({ className }: WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <Button className={`${mainClass}__btn action-btn ${mainClass}__btn--minus`} icon={<MinusIcon />} ariaLabel="Минус один товар" />
            <Field className="counter" name="counter" fieldType={FieldType.Number} value={1} />
            <Button className={`${mainClass}__btn action-btn ${mainClass}__btn--plus`} icon={<PlusIcon />} ariaLabel="Плюс один товар" />
        </div>
    );
};

export default Counter;