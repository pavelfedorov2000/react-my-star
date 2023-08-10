import { CartItem } from "../../components";

const mainClass = 'cart-table';

const CartTable = () => {
    return (
        <ul className={mainClass}>
            <li className={`${mainClass}__item`}>
                <CartItem />
            </li>
        </ul>
    );
};

export default CartTable;