import { Map, Placemark } from "@pbe/react-yandex-maps";
import pinIcon from "../../assets/images/icons/color.png";
import { useAppSelector } from "../../app/hooks";
import classNames from "classnames";

interface Props {
    className?: string;
}

const MapBlock = ({ className }: Props) => {
    const { activePins, center, mapZoom } = useAppSelector((state) => state.shopsReducer);

    return (
        <Map
            className={classNames('map', className)}
            state={{
                center,
                zoom: mapZoom,
                controls: []
            }}
        >
            {activePins.map((shop) => (
                <Placemark
                    key={shop.id}
                    geometry={shop.coordinates}
                    options={{
                        iconLayout: "default#image",
                        iconImageSize: [32, 32],
                        iconImageOffset: [-16, -32],
                        iconImageHref: pinIcon
                    }}
                />
            ))}
        </Map>
    );
};

export default MapBlock;