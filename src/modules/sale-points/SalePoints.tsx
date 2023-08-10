import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Map } from "../../components";
import { Pages } from "../../enums/Page";
import { Button } from "../../ui";
import { shopsSlice } from "../../redux/reducers/ShopsSlice";
import { generateRowClassName } from "../../utils/generateRowClassName";

const mainClass = 'sale-points';

const SalePoints = () => {
    const dispatch = useAppDispatch();
    const { shops, cities, activeCityTabIndex, activePins } = useAppSelector((state) => state.shopsReducer);

    const handleSetFilter = (city: string, index: number) => {
        dispatch(shopsSlice.actions.setFilter([city, index]));
    }

    const handleResetFilter = () => {
        dispatch(shopsSlice.actions.resetFilter());
    }

    return (
        <section className={`section ${mainClass}`}>
            <div className={generateRowClassName(mainClass)}>
                <h2 className={`section-title ${mainClass}__text`}>Широкая сеть точек продаж</h2>
                <div className={`clamp-text ${mainClass}__text`}>
                    Вы можете приобрести нашу мебель в фирменных мебельных магазинах «MySTAR», мебельных секциях в торговых
                    центрах, а также в точках продаж наших оптовых партнеров lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    error quisquam eaque ad aperiam delectus cupiditate fugit eius quos, odit rem maxime inventore quod
                    reprehenderit numquam neque ullam ipsum provident.
                </div>
                <Button href={Pages.Shops.path} className={`${mainClass}__more`} text="Показать еще" style="more" />
                <div className={`tabs ${mainClass}__tabs`}>
                    <Button onClick={() => handleResetFilter()} city="all" className={classNames('filter-tab', {
                        'active': activeCityTabIndex === 0 && activePins.length === shops.length
                    })} text="Все" />
                    {cities.map((city, index) => (
                        <Button onClick={() => handleSetFilter(city, index)} key={index} city={shops.filter((shop) => shop.city === city)[0].code} className={classNames('filter-tab', {
                            'active': activeCityTabIndex === index && activePins.length !== shops.length
                        })} text={city} />
                    ))}
                </div>
                <Map className={`${mainClass}__map`} />
            </div>
        </section>
    );
};

export default SalePoints;