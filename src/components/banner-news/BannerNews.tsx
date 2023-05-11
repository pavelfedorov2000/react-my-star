import { Button, Img } from "../../ui";
import { MoreIcon } from "../../ui/icons";

interface Props {
    title: string;
}

const BannerNews = ({ title }: Props) => {
    return (
        <article className="banner-news">
            <figure className="banner-news__bg">
                <Img src="https://i.ibb.co/28SdQxg/banner-news.jpg" width={1372} height={600} cover />
            </figure>
            <div className="banner-news__content">
                <h2 className="section-title banner-news__title">{title}</h2>
                <Button href="/catalog" className="banner-news__btn" text="Подробнее" icon={<MoreIcon />} icon_position_right style="bg-white" />
            </div>
        </article>
    );
};

export default BannerNews;