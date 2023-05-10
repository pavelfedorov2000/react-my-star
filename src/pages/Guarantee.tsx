import { useEffect, useState } from "react";
import { Img } from "../ui";
import picture from "../assets/images/delivery-promo.jpg";
import { Collection } from "../enums/Collection";
import { ListType } from "../enums/ListType";
import { getCollectionItems } from "../utils/getCollectionItems";
import { Section } from "../interfaces/Section";
import { Text } from "../interfaces/Text";

const Guarantee = () => {
    const [guaranteeSections, setGuaranteeSections] = useState<Section[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.Guarantee, setGuaranteeSections);
    }, []);

    return (
        <main className="page text-page">
            <div className="container">
                <div className="text-page__body">
                    <div className="text-page__promo-img">
                        <Img src={picture} width={1372} height={400} cover />
                    </div>

                    {guaranteeSections.sort((a, b) => a.order - b.order).map((section) => (
                        <section key={section.id}>
                            <div className="row">
                                <div className="col-3">
                                    <h2>{section.title}</h2>
                                </div>
                                <div className="col-6">
                                    {section.content.items.map((item, index) => {
                                        if (item.text) {
                                            return (
                                                <p key={index}>{item.text}</p>
                                            )
                                        }

                                        if (item.list) {
                                            const listMap = <>
                                                {item.list.items.map((item: Text, index: number) => (
                                                    <li key={index}>{item.text}</li>
                                                ))}
                                            </>

                                            return (
                                                item.list.type === ListType.Ol ?
                                                <ol key={index}>
                                                    {listMap}
                                                </ol>
                                                :
                                                <ul key={index}>
                                                    {listMap}
                                                </ul>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Guarantee;