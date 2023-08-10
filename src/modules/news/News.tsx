import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import { NewsItem, SliderArrows } from '../../components';
import { NewsItem as NewsItemType } from '../../interfaces/NewsItem';
import { getCollectionItems } from '../../utils/getCollectionItems';
import { Collection } from '../../enums/Collection';

const SECTION_ID = 'news';

const News = () => {
    const [news, setNews] = useState<NewsItemType[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.News, setNews);
    }, []);

    return (
        <section id={SECTION_ID}>
            <h2>Новости компании</h2>
            <div className="slider-wrapper">
                <Swiper className="slider"
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        nextEl: `#${SECTION_ID} .swiper-button-next`,
                        prevEl: `#${SECTION_ID} .swiper-button-prev`,
                    }}
                    pagination={{ type: "progressbar" }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {news.map((item) => (
                        <SwiperSlide key={item.id}>
                            <NewsItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div>
                <SliderArrows />
            </div>
        </section>
    );
};

export default News;