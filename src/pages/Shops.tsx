import { ShopsList } from "../modules";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { Shop } from "../interfaces/Shop";
import pinIcon from "../assets/images/icons/pin.png";
import { PageTop } from "../components";
import { Page } from "../interfaces/Route";

const Shops = ({ title }: Page) => {
    //const [center, setCenter] = useState<number[]>([]);
    const center = [53.91108907066282, 27.41543249999999];
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        const getShops = async () => {
            const colRef = collection(db, "shops");
            const docsSnap = await getDocs(colRef) as any;
            docsSnap.forEach((doc: any) => {
                setShops((prev) => {
                    if (prev.findIndex((item) => item.id === doc.id) !== -1) {
                        return [
                            ...prev
                        ]
                    }
                    
                    return [
                        ...prev,
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    ]
                });
            });
        }
        getShops();

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
                </div>
            </div>
        </div>
    );
};

export default Shops;