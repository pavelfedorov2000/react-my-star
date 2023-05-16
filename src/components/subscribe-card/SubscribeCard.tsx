import classNames from "classnames";
import { Button } from "../../ui";
import { Subscribe } from "../../interfaces/Subscribe";
import subscribeDecor from "../../assets/images/subscribe-decor.svg";

const SubscribeCard = ({ title, isSubscribed, email, sms }: Subscribe) => {
    return (
        <article className="subscribe-card" style={{ backgroundImage: `url(${subscribeDecor})` }}>
            <div className="subscribe-card__title">{title}</div>
            <ul className="subscribe-card__list">
                {email && <li>— по e-mail</li>}
                {sms && <li>— по смс</li>}
            </ul>
            <Button className="subscribe-card__link-btn" style="link" text="Изменить" />
            <Button className={classNames('subscribe-card__btn', {
                'btn--style_border-gray': isSubscribed
            })} text={isSubscribed ? 'Отменить подписку' : 'Подписаться'} />
        </article>
    );
};

export default SubscribeCard;