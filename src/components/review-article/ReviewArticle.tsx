import { Review } from "../../interfaces/Review";
import { Button, Img } from "../../ui";

const ReviewArticle = ({ author, text, href, caption, video }: Review) => {
    return (
        <article className="review-article">
            <div className="row review-article__inner row--8">
                <div className="col-3">
                    <div className="review-article__name">{author}</div>
                    <p className="review-article__text clamp-text">
                        {text}
                    </p>
                    <Button href={href} text="Посмотреть отзыв" style="link" blank contact />
                </div>
                <div className="col-4">
                    <figure className="video review-article__video">
                        {caption && <figcaption className="video__descr">{caption}</figcaption>}
                        {video ?
                            <iframe src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            :
                            <Img src="https://i.ibb.co/MSRbXtv/client-review.jpg" width={444} height={300} cover />
                        }
                    </figure>
                </div>
            </div>
        </article>
    );
};

export default ReviewArticle;