import { useAppSelector } from "../app/hooks";
import { EmptyBlock, PageTop } from "../components";
import { ClassName } from "../enums/ClassName";
import { Page } from "../interfaces/Route";
import { CartLayout, CartTable } from "../modules";

const pageName = 'cart';

const Cart = ({ path, title, emptyBlock }: Page) => {
    const { items } = useAppSelector((state) => state.cartReducer);

    return (
        <main className={`${ClassName.Page} ${pageName}-${ClassName.Page}`}>
            <div className={ClassName.Container}>
                <PageTop path={path} title={title} />
                {items.length !== 0 ?
                    <CartLayout page={pageName} children={<CartTable />} />
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </div>
        </main>
    );
};

export default Cart;