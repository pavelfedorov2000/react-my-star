import { Shop } from "../../interfaces/Shop";
import { Button } from "../../ui";
import { formatPhone } from "../../utils/formatPhone";

const mainClass = 'shop-item';

const ShopItem = ({ code, city, address, schedule, phones }: Shop) => {
    return (
        <li className={mainClass}>
            <div className={`${mainClass}__col`}>
                <b>г. {city}</b>
                <Button city={code} className={`${mainClass}__link`} style="link" text={address} />
            </div>
            <div className={`${mainClass}__col`}>
                {schedule.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className={`${mainClass}__col`}>
                {phones.map((phone, index) => (
                    <a key={index} href={`tel:${formatPhone(phone)}`} className="phone">
                        {phone}
                    </a>
                ))}
            </div>
        </li>
    );
};

export default ShopItem;