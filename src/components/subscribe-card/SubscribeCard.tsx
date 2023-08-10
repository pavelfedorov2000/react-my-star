import classNames from "classnames";
import { Button } from "../../ui";
import { Subscribe } from "../../interfaces/Subscribe";
import subscribeDecor from "../../assets/images/subscribe-decor.svg";
import { ClassName } from "../../enums/ClassName";

const mainClass = 'subscribe-card';

const SubscribeCard = ({ title, isSubscribed, email, sms }: Subscribe) => {
    return (
        <article className={mainClass} style={{ backgroundImage: `url(${subscribeDecor})` }}>
            <div className={`${mainClass}__title`}>{title}</div>
            <ul className={`${mainClass}__list`}>
                {email && <li>— по e-mail</li>}
                {sms && <li>— по смс</li>}
            </ul>
            <Button className={`${mainClass}__link-btn`} style="link" text="Изменить" />
            <Button className={classNames(`${mainClass}__btn`, {
                [`${ClassName.Button}--style_bg-gray`]: isSubscribed
            })} text={isSubscribed ? 'Отменить подписку' : 'Подписаться'} />
        </article>
    );
};

export default SubscribeCard;