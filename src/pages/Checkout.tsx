import { PageTop } from "../components";
import { Page } from "../interfaces/Route";
import { CartLayout, CheckoutForm, CheckoutTotal } from "../modules";

const Checkout = ({ path, title }: Page) => {
    return (
        <main className="page cart-page">
            <div className="container">
                <PageTop path={path} title={title} />
                <form action="#">
                    <CartLayout content={<CheckoutForm />} />
                </form>
            </div>
        </main>
    );
};

export default Checkout;