import { useAppSelector } from "../../app/hooks";
import { ShopItem } from "../../components";

const ShopsList = () => {
    const { shops } = useAppSelector((state) => state.shopsReducer);

    return (
        <ul className="shops-list">
            {shops.map((shop) => (
                <ShopItem key={shop.id} {...shop} />
            ))}
        </ul>
    );
};

export default ShopsList;