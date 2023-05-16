import classNames from "classnames";
import { Button } from "../../ui";
import { LabelBox as LabelBoxType } from "../../interfaces/LabelBox";

const LabelBox = ({ bg, button, title, sale }: LabelBoxType) => {
    return (
        <div className={classNames('label-box', `label-box--style_bg-${bg}`)}>
            <div className="label-box__title">
                {button && <Button className="label-box__link-btn" style="link-accent" text="Войдите или зарегистрируйтесь" />}
                {title}
            </div>
            {sale &&
                <div className="label-box__row">
                    <b>Майская акция - 15% на все товары</b>
                    <b className="ttu">Май2022</b>
                </div>
            }
        </div>
    );
};

export default LabelBox;