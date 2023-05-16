import { useEffect, useState } from "react";
import { AboutNumbers } from "../../components";
import { Leader } from "../../interfaces/Leader";
import { Button } from "../../ui";
import { getCollectionItems } from "../../utils/getCollectionItems";
import { Collection } from "../../enums/Collection";

interface AboutSection {
    title: string;
    text: string;
    numbers: Leader;
}

const AboutCompany = () => {
    const [content, setContent] = useState<AboutSection>();

    useEffect(() => {
        getCollectionItems(Collection.AboutSection, setContent, true);
    }, []);

    return (
        <section className="section about-company">
            <div className="section__top about-company__top">
                <h2 className="section-title about-company__title">{content?.title}</h2>
            </div>
            <div className="row about-company__row">
                <AboutNumbers className="about-company__numbers" {...content?.numbers} />
                <div className="about-company__content">
                    <p className="about-company__text">
                        {content?.text}
                    </p>
                    <Button href="/about" style="more" text="Подробнее о компании" />
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;