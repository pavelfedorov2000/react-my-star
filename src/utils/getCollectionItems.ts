import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getCollectionItems = async (collectionName: string, setFunction: (prev: any) => void) => {
    const colRef = collection(db, collectionName);
    const docsSnap = await getDocs(colRef) as any;
    docsSnap.forEach((doc: any) => {
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
    });
}