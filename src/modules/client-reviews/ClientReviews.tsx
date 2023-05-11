import { useState, useEffect } from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import { ReviewArticle, SliderArrows } from "../../components";
import { Review } from '../../interfaces/Review';
import { getCollectionItems } from '../../utils/getCollectionItems';
import { Collection } from '../../enums/Collection';

const ClientReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.Reviews, setReviews);
    }, []);

    return (
        <section id="client-reviews">
            <div className="row">
                <div className="col-4">
                    <h2>Отзывы клиентов</h2>
                </div>
                <div className="col-8">
                    <div className="slider-wrapper">
                       <Swiper className="slider reviews-slider"
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                                nextEl: "#client-reviews .swiper-button-next",
                                prevEl: "#client-reviews .swiper-button-prev",
                            }}
                            pagination={{ type: "progressbar" }}
                        >
                            {reviews.map((review) => (
                                <SwiperSlide key={review.id}>
                                    <ReviewArticle {...review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                        <SliderArrows />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;