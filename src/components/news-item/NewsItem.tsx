import { NewsItem as NewsItemType } from "../../interfaces/NewsItem";
import { DateTime, Img } from "../../ui";

const NewsItem = ({ img, title, date }: NewsItemType) => {
    return (
        <article className="news-item">
            <picture className="news-item__img">
                <Img {...img} width={444} height={320} cover />
            </picture>
            <h3 className="news-item__title">
                {title.text}
            </h3>
            <footer className="news-item__footer">
                <DateTime className="news-item__date" date={date} />
            </footer>
        </article>
    );
};

export default NewsItem;