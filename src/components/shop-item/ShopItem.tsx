import { Shop } from "../../interfaces/Shop";
import { Button } from "../../ui";
import { formatPhone } from "../../utils/formatPhone";

const ShopItem = ({ code, city, address, schedule, phones }: Shop) => {
    return (
        <li className="shop-item">
            <div className="shop-item__col">
                <b>г. {city}</b>
                <Button city={code} className="shop-item__link" style="link" text={address} />
            </div>
            <div className="shop-item__col">
                {schedule.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="shop-item__col">
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