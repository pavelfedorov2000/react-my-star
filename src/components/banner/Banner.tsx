import { Button } from "../../ui";
import { MoreIcon } from "../../ui/icons";
import bannerFirst from "../../assets/images/banners/01.jpg";
import bannerSecond from "../../assets/images/banners/02.jpg";
import { ButtonStyle } from "../../enums/ButtonStyle";
import { Pages } from "../../enums/Page";
import { Link } from "react-router-dom";
import { BannerVariant } from "../../enums/BannerVariant";

const mainClass = 'banner';

interface Props {
    variant: BannerVariant.WithoutButton | BannerVariant.WithButton;
}

const Banner = ({ variant }: Props) => {
    return (
        <aside className={`${mainClass}`} style={{ backgroundImage: `url(${variant === BannerVariant.WithoutButton ? bannerFirst : bannerSecond})` }}>
            <div className={`row ${mainClass}__row row--2`}>
                <div className={`${mainClass}__content`}>
                    <h2 className={`section-title ${mainClass}__title`}>
                        <Link to={Pages.Catalog.path} className="full-link">Рассрочка</Link>
                    </h2>
                    <div className={`${mainClass}__subtitle`}>Покупайте сейчас, платите потом</div>
                    {variant === BannerVariant.WithButton &&
                        <Button href={Pages.Catalog.path} className={`${mainClass}__btn`} text="Подробнее" style={ButtonStyle.BgWhite} icon={<MoreIcon />} icon_position_right />
                    }
                </div>
            </div>
        </aside>
    );
};

export default Banner;