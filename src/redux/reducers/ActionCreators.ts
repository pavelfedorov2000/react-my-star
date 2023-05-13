import { collection, getDocs } from "firebase/firestore";
import { Collection } from "../../enums/Collection";
import { db } from "../../firebase/firebase";
import { AppDispatch } from "../store";
import { contactsSlice } from "./ContactsSlice";
import { shopsSlice } from "./ShopsSlice";
import { Shop } from "../../interfaces/Shop";

export const fetchContacts = () => async (dispatch: AppDispatch) => {
    try {
        const response = collection(db, Collection.Contacts);
        const docsSnap = await getDocs(response) as any;
        docsSnap.forEach((doc: any) => {
            dispatch(contactsSlice.actions.setContacts(doc.data()));
        });
    } catch (error) {
        console.log(error);
    }
}

export const fetchShops = () => async (dispatch: AppDispatch) => {
    try {
        const response = collection(db, Collection.Shops);
        const docsSnap = await getDocs(response) as any;
        let data: Shop[] = [];
        docsSnap.forEach((doc: any) => {
            data = data.findIndex((item: Shop) => item.id === doc.id) !== -1 ? data : [...data, { id: doc.id, ...doc.data() }]
            dispatch(shopsSlice.actions.setShops(data));
        });
    } catch (error) {
        console.log(error);
    }
}