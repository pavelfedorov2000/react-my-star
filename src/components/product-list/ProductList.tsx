import classNames from "classnames";

interface Props {
    className?: string;
}

const ProductList = ({ className }: Props) => {
    return (
        <dl className={classNames('product-list', className)}>
            <div>
                <dt>Цвет:</dt>
                <dd>белый</dd>
            </div>
            <div>
                <dt>Размеры:</dt>
                <dd>152,8 см х 40,5 см х 72,4 см</dd>
            </div>
        </dl>
    );
};

export default ProductList;