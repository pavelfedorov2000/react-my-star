import { useAppSelector } from "../../app/hooks";
import { EmptyBlock, OrderTable } from "../../components";
import { Route } from "../../interfaces/Route";

const Orders = ({ emptyBlock }: Route) => {
    const { items } = useAppSelector((state) => state.ordersReducer);
    console.log(items);
    

    return (
        <>
            {items.length !== 0 ?
                <OrderTable />
                :
                <EmptyBlock text={emptyBlock?.text} />
            }
        </>
    );
};

export default Orders;