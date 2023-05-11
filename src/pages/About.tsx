import { useEffect, useState } from "react";
import { Collection } from "../enums/Collection";
import { Section } from "../interfaces/Section";
import { ClientReviews, Contacts, Feedback, News } from "../modules";
import { getCollectionItems } from "../utils/getCollectionItems";
import { Text } from "../interfaces/Text";
import { Button, Img } from "../ui";

const About = () => {
    const [aboutSections, setAboutSections] = useState<Section[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.About, setAboutSections);
    }, []);
    
    return (
        <main className="page text-page">
            <div className="container">
                <div className="text-page__body">
                    <div className="text-page__video video">
                        <iframe src="https://www.youtube.com/embed/ePCNcs3-o_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    {aboutSections.sort((a, b) => a.order - b.order).map((section) => (
                        <section id={section.id}>
                            <div className="row">
                                <div className="col-4">
                                    <h2>{section.title}</h2>
                                </div>
                                <div className={`col-${section.content.span ?? 8}`}>
                                    {section.content.items.map((item, index) => {
                                        if (item.text) {
                                            return <p key={index}>{item.text}</p>
                                        }

                                        if (item.items) {
                                            return item.items.length > 1 ?
                                                <div key={index} className="row row--7">
                                                    {item.items.map((item: Text, j: number) => (
                                                        <div key={j} className="col-3">
                                                            <p>{item.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                :
                                                <p>{item.items[0].text}</p>
                                        }

                                        if (item.btn) {
                                            return <Button {...item.btn} />
                                        }

                                        if (item.img) {
                                            return <Img {...item.img} />
                                        }

                                        if (item.sections) {
                                            return (
                                                <div>
                                                    {item.sections.map((section: Section, i: number) => (
                                                        <section key={i}>
                                                            <div className="row row--7">
                                                                <div className="col-3">
                                                                    <h3>{section.title}</h3>
                                                                </div>
                                                                <div className="col-4">
                                                                    {section.content.items.map((item, j) => (
                                                                        item.list &&
                                                                        <ul key={j}>
                                                                            {item.list.items.map((li: Text, k: number) => (
                                                                                <li key={k}>{li.text}</li>
                                                                            ))}
                                                                        </ul>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </section>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {section.items?.map((item, index) => (
                                <div className="row">
                                    {item.items &&
                                        item.items.map((item: any) => (
                                            <div key={index} className={`col-${item.span ?? 4}`}>
                                                <picture>
                                                    <Img src={item.src} width={item.width} height={item.height} cover />
                                                </picture>
                                            </div>
                                        ))
                                    }
                                    {item.content &&
                                        <div className="col-7">
                                            {item.content.items.map((item: any, j: number) => {
                                                if (item.text) {
                                                    return <p key={j}>{item.text}</p>
                                                }

                                                if (item.items) {
                                                    return <div key={j} className="row row--7">
                                                        {item.items.length > 1 ?
                                                            item.items.map((item: Text, k: number) => (
                                                                <div key={k} className="col-3">
                                                                    <p>{item.text}</p>
                                                                </div>
                                                            ))
                                                            :
                                                            <p>{item.items[0].text}</p>
                                                        }
                                                    </div>
                                                }
                                            })}
                                        </div>
                                    }
                                </div>
                            ))}
                        </section>
                    ))}
                    <News />
                    <ClientReviews />
                    <Contacts />
                    <Feedback />
                </div>
            </div>
        </main>
    );
};

export default About;