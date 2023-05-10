import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { Img } from "../ui";
import picture from "../assets/images/delivery-promo.jpg";

interface Text {
    text: string;
}

interface Section {
    id: string;
    title: string;
    content: {
        items: any[];
    }
}

const Guarantee = () => {
    const [guaranteeData, setGuaranteeData] = useState<Section[]>([]);

    useEffect(() => {
        const getGuaranteeSections = async () => {
            const colRef = collection(db, "guarantee");
            const docsSnap = await getDocs(colRef) as any;
            docsSnap.forEach((doc: any) => {
                setGuaranteeData(doc.data().sections);
            });
        }
        getGuaranteeSections();
    }, []);

    return (
        <main className="page text-page">
            <div className="container">
                <div className="text-page__body">
                    <div className="text-page__promo-img">
                        <Img src={picture} cover width={1372} height={400} />
                    </div>

                    {guaranteeData && guaranteeData.map((section, index) => (
                        <section key={index}>
                            <div className="row">
                                <div className="col-3">
                                    <h2>{section.title}</h2>
                                </div>
                                <div className="col-6">
                                    {section.content.items.map((item, j) => {
                                        if (item.text) {
                                            return (
                                                <>
                                                    <p key={j}>{item.text}</p>
                                                    {
                                                        index === 2 && <p>Образец акта рекламации можно скачать <a href="#" target="_blank">по ссылке</a>.</p>
                                                    }
                                                </>
                                            )
                                        }

                                        if (item.list) {
                                            const listMap = <>
                                                {item.list.items.map((item: Text, index: number) => (
                                                        <li key={index}>{item.text}</li>
                                                ))}
                                            </>

                                            return (
                                                item.list.type === 'ol' ?
                                                <ol key={j}>
                                                    {listMap}
                                                </ol>
                                                :
                                                <ul key={j}>
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