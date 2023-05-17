import { useAppSelector } from "../app/hooks";
import { EmptyBlock, PageTop } from "../components";
import { Page } from "../interfaces/Route";
import { CartLayout, CartTable } from "../modules";

const Cart = ({ path, title, emptyBlock }: Page) => {
    const { items } = useAppSelector((state) => state.cartReducer);

    return (
        <main className="page cart-page">
            <div className="container">
                <PageTop path={path} title={title} />
                {items.length !== 0 ?
                    <CartLayout content={<CartTable />} />
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </div>
        </main>
    );
};

export default Cart;