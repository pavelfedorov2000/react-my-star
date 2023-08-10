import { Link } from "react-router-dom"
import { Button, Img } from "../../ui";
import ProductList from "../product-list/ProductList";
import Counter from "../counter/Counter";
import { CompareIcon, FavoriteIcon, TrashIcon } from "../../ui/icons";
import cartItemImg from "../../assets/images/delivery-promo.jpg";

const mainClass = 'cart-item';

const CartItem = () => {
    return (
        <article className={mainClass}>
            <Link to="/" className={`${mainClass}__img-wrap`}>
                <Img className={`${mainClass}__img`} src={cartItemImg} width={200} height={200} />
            </Link>
            <Link to="/" className={`${mainClass}__title`}>Шкаф для книг</Link>
            <div className={`prices ${mainClass}__prices`}>
                <div className={`new-price ${mainClass}__new-price`}>350 руб.</div>
                <div className="old-price">388 руб.</div>
            </div>
            <div className={`articul ${mainClass}__articul`}>ИВ-116.02.00 Анника</div>
            <ProductList className={`${mainClass}__list`} />
            <Counter className={`${mainClass}__counter`} />
            <div className={`${mainClass}__actions`}>
                <Button className={`action-btn ${mainClass}__action-btn`} icon={<CompareIcon />} />
                <Button className={`action-btn ${mainClass}__action-btn`} icon={<FavoriteIcon />} />
                <Button className={`action-btn ${mainClass}__action-btn`} icon={<TrashIcon />} />
            </div>
        </article>
    );
};

export default CartItem;