import { collection, getDocs } from "firebase/firestore";
import { Collection } from "../../enums/Collection";
import { db } from "../../firebase/firebase";
import { AppDispatch } from "../store";
import { contactsSlice } from "./ContactsSlice";

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