import { Shop } from "../../interfaces/Shop";

const ShopItem = ({ city, address, schedule, phones }: Shop) => {
    return (
        <li className="shop-item">
		    <div className="shop-item__col">
                <b>г. {city}</b>
                <a data-city="ivacevichi" href="#shop-popup" className="shop-item__link">
                    {address}
                </a>
		    </div>
		    <div className="shop-item__col">
                {schedule.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
		    </div>
		    <div className="shop-item__col">
                {phones.map((phone, index) => (
                    <a key={index} href="tel:+375333448281" className="phone">
                        {phone}
                    </a>
                ))}
		    </div>
	    </li>
    );
};

export default ShopItem;