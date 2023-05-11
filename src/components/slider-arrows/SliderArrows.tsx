import { Button } from "../../ui";
import { ArrowLeftIcon, ArrowRightIcon } from "../../ui/icons";

const SliderArrows = () => {
    return (
        <div className="slider-arrows">
            <Button className="swiper-button-prev" icon={<ArrowLeftIcon />} transparent />
            <Button className="swiper-button-next" icon={<ArrowRightIcon />} transparent />
        </div>
    );
};

export default SliderArrows;