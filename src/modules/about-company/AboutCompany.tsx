import { useEffect, useState } from "react";
import { AboutNumbers } from "../../components";
import { Leader } from "../../interfaces/Leader";
import { Button } from "../../ui";
import { getCollectionItems } from "../../utils/getCollectionItems";
import { Collection } from "../../enums/Collection";
import { generateRowClassName } from "../../utils/generateRowClassName";
import { Pages } from "../../enums/Page";

interface AboutSection {
    title: string;
    text: string;
    numbers: Leader;
}

const mainClass = 'about-company';

const AboutCompany = () => {
    const [content, setContent] = useState<AboutSection>();

    useEffect(() => {
        getCollectionItems(Collection.AboutSection, setContent, true);
    }, []);

    return (
        <section className={`section ${mainClass}`}>
            <div className="section__top about-company__top">
                <h2 className="section-title about-company__title">{content?.title}</h2>
            </div>
            <div className={generateRowClassName(mainClass)}>
                <AboutNumbers className={`${mainClass}__numbers`} {...content?.numbers} />
                <div className={`${mainClass}__content`}>
                    <p className={`${mainClass}__text`}>
                        {content?.text}
                    </p>
                    <Button href={Pages.About.path} style="more" text="Подробнее о компании" />
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;