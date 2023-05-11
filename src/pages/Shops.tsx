import { Contacts, Feedback, ShopsList } from "../modules";
import { Map, Placemark } from "@pbe/react-yandex-maps"; 
import { useEffect, useState } from "react";
import { Shop } from "../interfaces/Shop";
import pinIcon from "../assets/images/icons/pin.svg";
import { PageTop } from "../components";
import { Page } from "../interfaces/Route";
import { getCollectionItems } from "../utils/getCollectionItems";
import { Collection } from "../enums/Collection";

const Shops = ({ title }: Page) => {
    //const [center, setCenter] = useState<number[]>([]);
    const center = [53.91108907066282, 27.41543249999999];
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.Shops, setShops);

        /* if (shops.length > 0) {
            setCenter(shops.filter((shop) => shop.city === 'Минск')[0].coordinates);
        } */
    }, []);

    return (
        <div className="text-page">
            <div className="container">
                <PageTop title={title} />

                <div className="text-page__body">
                    {center &&
                        <Map
                            className="text-page__map"
                            state={{
                                center,
                                zoom: 6,
                                controls: []
                            }}
                        >
                            {shops.map((shop) => (
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
                    }
                    <section className="row">
                        <div className="col-3">
                            <h2 className="visually-hidden">Список магазинов</h2>
                            <p>
                                Вы можете приобрести нашу мебель в фирменных мебельных магазинах «MySTAR», мебельных секциях в торговых центрах, а также в точках продаж наших оптовых партнеров.
                            </p>
                        </div>
                        <div className="col-8">
                            <ShopsList shops={shops} />
                        </div>
                    </section>
                    <Contacts />
                    <Feedback />
                </div>
            </div>
        </div>
    );
};

export default Shops;