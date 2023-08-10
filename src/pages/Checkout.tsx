import { PageTop } from "../components";
import { ClassName } from "../enums/ClassName";
import { Page } from "../interfaces/Route";
import { CartLayout, CheckoutForm } from "../modules";
import { generatePageClassName } from "../utils/generatePageClassName";

const pageName = 'cart';

const Checkout = ({ path, title }: Page) => {
    return (
        <main className={generatePageClassName(pageName)}>
            <div className={ClassName.Container}>
                <PageTop path={path} title={title} />
                <form action="#">
                    <CartLayout page={pageName} children={<CheckoutForm />} />
                </form>
            </div>
        </main>
    );
};

export default Checkout;