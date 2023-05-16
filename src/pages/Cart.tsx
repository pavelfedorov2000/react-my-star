import { PageTop } from "../components";
import { Page } from "../interfaces/Route";
import { CartLayout, CartTable } from "../modules";

const Cart = ({ path, title }: Page) => {
    return (
        <main className="page cart-page">
            <div className="container">
                <PageTop path={path} title={title} />
                <CartLayout content={<CartTable />} />
            </div>
        </main>
    );
};

export default Cart;