import CheckoutTotal from "../checkout-total/CheckoutTotal";
import { WithChildren } from "../../types/types";
import { useMemo } from "react";
import { ClassName } from "../../enums/ClassName";
import { generateRowClassName } from "../../utils/generateRowClassName";

const CartLayout = ({ page, children }: { page: string } & WithChildren) => {
    const mainClass = useMemo(() => {
        return `${page}-${ClassName.Page}`;
    }, [page]);

    return (
        <div className={generateRowClassName(mainClass)}>
            <div className={`${mainClass}__content`}>
                {children}
            </div>
            <div className={`${mainClass}__aside`}>
                <CheckoutTotal />
            </div>
        </div>
    );
};

export default CartLayout;