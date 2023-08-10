import { Good } from "../../interfaces/Good";

const mainClass = 'catalog-card';

const CatalogCard = ({ isSwiperSlide, title, sale, isNew }: Good) => {
    return (
        <li className={isSwiperSlide ? 'swiper-slide' : ''}>
            <div className={`${mainClass}__top`}>
                <div className={`${mainClass}__actions`}>

                </div>
            </div>
            <div className={`swiper ${mainClass}__gallery`}>
                <a href="#" className="swiper-wrapper">

                </a>
            </div>
            <div className={`${mainClass}__content`}>
                <div className={`${mainClass}__title`}>
                    <a href="">{title}</a>
                </div>
            </div>
            <div className={`${mainClass}__wrap`}>
                <div className={`${mainClass}__cost`}>
                    <div className={`prices ${mainClass}__prices`}>

                    </div>
                    {(sale || isNew) &&
                        <div className="badges">

                        </div>
                    }
                </div>
            </div>
        </li>
    );
};

export default CatalogCard;