import { useEffect, useState } from "react";
import { Collection } from "../enums/Collection";
import { Section } from "../interfaces/Section";
import { Feedback } from "../modules";
import { getCollectionItems } from "../utils/getCollectionItems";

const About = () => {
    const [aboutSections, setAboutSections] = useState<Section[]>([]);

    useEffect(() => {
        getCollectionItems(Collection.About, setAboutSections);
    }, []);

    return (
        <main className="page">
            <div className="container">
                {aboutSections.map((section) => (
                    <section>
                        <div className="row">
                            <div className="col-4">

                            </div>
                        </div>
                        
                    </section>
                ))}
                <Feedback />
            </div>
        </main>
    );
};

export default About;