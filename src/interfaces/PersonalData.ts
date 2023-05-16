import { Field } from "./Field";
import { SelectOption } from "./SelectOption";

export interface PersonalData extends Field {
    options?: SelectOption[];
}