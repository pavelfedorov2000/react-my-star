import { Contacts, Feedback, ShopsList } from "../modules";
import { Map, PageTop } from "../components";
import { Page } from "../interfaces/Route";

const Shops = ({ path, title }: Page) => {
    return (
        <div className="text-page">
            <div className="container">
                <PageTop path={path} title={title} />
                <div className="text-page__body">
                    <Map className="text-page__map" />
                    <section className="row">
                        <div className="col-3">
                            <h2 className="visually-hidden">Список магазинов</h2>
                            <p>
                                Вы можете приобрести нашу мебель в фирменных мебельных магазинах «MySTAR», мебельных секциях в торговых центрах, а также в точках продаж наших оптовых партнеров.
                            </p>
                        </div>
                        <div className="col-8">
                            <ShopsList />
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