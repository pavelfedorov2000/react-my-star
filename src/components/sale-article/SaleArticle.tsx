import { SaleArticle as SaleArticleType } from "../../interfaces/SaleArticle";
import { Badge, Button, Img } from "../../ui";

const SaleArticle = ({ src, title, period, text }: SaleArticleType) => {
    return (
        <li>
            <article className="sale-article row">
                <figure className="sale-article__image">
                    <Img className="sale-article__img" src={src} width={676} height={500} />
                </figure>
                <div className="sale-article__content">
                    <h2 className="sale-article__title">{title}</h2>
                    <Badge className="sale-article__badge" bg="pink" text={period} />
                    <div className="sale-article__text">
                        {text.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                        <button className="btn sale-article__text-more btn--style_drop-black"
                                type="button">
                            <span className="btn__text">Показать полностью</span>
                            <svg className="btn__icon"
                                viewBox="0 0 7 12"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path d="M1 1L6 6L1 11"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <ul className="sale-article__goods">
                        
                    </ul>
                    <Button className="sale-article__btn" style="border" text="Посмотреть акционные товары" />
                </div>
            </article>
        </li>
    );
};

export default SaleArticle;