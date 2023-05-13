import { Button } from "../../ui";
import { MoreIcon } from "../../ui/icons";
import bannerFirst from "../../assets/images/banners/01.jpg";
import bannerSecond from "../../assets/images/banners/02.jpg";
import { ButtonStyle } from "../../enums/ButtonStyle";
import { Pages } from "../../enums/Page";
import { Link } from "react-router-dom";

interface Props {
    variant: 'first' | 'second';
}

const Banner = ({ variant }: Props) => {
    return (
        <aside className="banner" style={{ backgroundImage: `url(${variant === 'first' ? bannerFirst : bannerSecond})` }}>
            <div className="row banner__row row--2">
                <div className="banner__content">
                    <h2 className="section-title banner__title">
                        <Link to={Pages.Catalog.path} className="full-link">Рассрочка</Link>
                    </h2>
                    <div className="banner__subtitle">Покупайте сейчас, платите потом</div>
                    {variant === 'second' && <Button href={Pages.Catalog.path} className="banner__btn" text="Подробнее" style={ButtonStyle.BgWhite} icon={<MoreIcon />} icon_position_right />}
                </div>
            </div>
        </aside>
    );
};

export default Banner;