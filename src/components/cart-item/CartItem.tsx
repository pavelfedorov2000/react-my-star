import { Link } from "react-router-dom"
import { Button, Img } from "../../ui";
import ProductList from "../product-list/ProductList";
import Counter from "../counter/Counter";
import { CompareIcon, FavoriteIcon, TrashIcon } from "../../ui/icons";
import cartItemImg from "../../assets/images/delivery-promo.jpg";

const CartItem = () => {
    return (
        <article className="cart-item">
            <Link to="/" className="cart-item__img-wrap">
                <Img className="cart-item__img" src={cartItemImg} width={200} height={200} />
            </Link>
            <Link to="/" className="cart-item__title">Шкаф для книг</Link>
            <div className="prices cart-item__prices">
                <div className="new-price cart-item__new-price">350 руб.</div>
                <div className="old-price">388 руб.</div>
            </div>
            <div className="cart-item__articul articul">ИВ-116.02.00 Анника</div>
            <ProductList className="cart-item__list" />
            <Counter className="cart-item__counter" />
            <div className="cart-item__actions">
                <Button className="action-btn cart-item__action-btn" icon={<CompareIcon />} />
                <Button className="action-btn cart-item__action-btn" icon={<FavoriteIcon />} />
                <Button className="action-btn cart-item__action-btn" icon={<TrashIcon />} />
            </div>
        </article>
    );
};

export default CartItem;