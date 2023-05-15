import { Auth } from "../enums/Auth";
import { Field } from "./Field";

export interface AuthTab {
    name: Auth.Enter | Auth.Register;
    title: string;
    fields: Field[];
}