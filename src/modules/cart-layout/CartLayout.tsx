import { ReactNode } from "react";
import CheckoutTotal from "../checkout-total/CheckoutTotal";

interface Props {
    content: ReactNode;
}

const CartLayout = ({ content }: Props) => {
    return (
        <div className="row cart-page__row">
            <div className="cart-page__content">
                {content}
            </div>
            <div className="cart-page__aside">
                <CheckoutTotal />
            </div>
        </div>
    );
};

export default CartLayout;