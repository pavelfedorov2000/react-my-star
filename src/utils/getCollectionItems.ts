import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getCollectionItems = async (collectionName: string, setFunction: (prev: any) => void, single?: boolean) => {
    const colRef = collection(db, collectionName);
    const docsSnap = await getDocs(colRef) as any;
    console.log(docsSnap.length);
    docsSnap.forEach((doc: any) => {
        console.log(doc.data());
        if (single !== undefined && single) {
            setFunction({
                ...doc.data()
            });
        } else {
            setFunction((prev: any) => {
                if (prev.findIndex((item: any) => item.id === doc.id) !== -1) {
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
        }
    });
}