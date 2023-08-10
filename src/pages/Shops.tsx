import { Contacts, Feedback, ShopsList } from "../modules";
import { Map, PageTop } from "../components";
import { Page } from "../interfaces/Route";
import { ClassName } from "../enums/ClassName";
import { generatePageClassName } from "../utils/generatePageClassName";

const pageName = 'text';
const mainClass = `${pageName}-${ClassName.Page}`;

const Shops = ({ path, title }: Page) => {
    return (
        <main className={generatePageClassName(pageName)}>
            <div className={ClassName.Container}>
                <PageTop path={path} title={title} />
                <div className={`${mainClass}__body`}>
                    <Map className={`${mainClass}__map`} />
                    <section className={ClassName.Row}>
                        <div className={`${ClassName.Col}-3`}>
                            <h2 className={ClassName.Hidden}>Список магазинов</h2>
                            <p>
                                Вы можете приобрести нашу мебель в фирменных мебельных магазинах «MySTAR», мебельных секциях в торговых центрах, а также в точках продаж наших оптовых партнеров.
                            </p>
                        </div>
                        <div className={`${ClassName.Col}-8`}>
                            <ShopsList />
                        </div>
                    </section>
                    <Contacts />
                    <Feedback />
                </div>
            </div>
        </main>
    );
};

export default Shops;