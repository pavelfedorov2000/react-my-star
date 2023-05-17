import { CartItem } from "../../components";

const CartTable = () => {
    return (
        <ul className="cart-table">
            <li className="cart-table__item">
                <CartItem />
            </li>
        </ul>
    );
};

export default CartTable;