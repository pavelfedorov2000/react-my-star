import { Button, Img } from "../../ui";
import { MoreIcon } from "../../ui/icons";

const mainClass = 'banner-news';

const BannerNews = ({ title }: { title: string }) => {
    return (
        <article className={mainClass}>
            <figure className={`${mainClass}__bg`}>
                <Img src="https://i.ibb.co/28SdQxg/banner-news.jpg" width={1372} height={600} cover />
            </figure>
            <div className={`${mainClass}__content`}>
                <h2 className={`section-title ${mainClass}__title`}>{title}</h2>
                <Button href="/catalog" className={`${mainClass}__btn`} text="Подробнее" icon={<MoreIcon />} icon_position_right style="bg-white" />
            </div>
        </article>
    );
};

export default BannerNews;