import { ReactNode } from "react";
import { FieldType } from "../enums/FieldType";
import { SelectOption } from "./SelectOption";

export interface Field {
    fieldType?: FieldType.Tel | FieldType.Email | FieldType.Password | FieldType.Number | FieldType.Checkbox | FieldType.Radio | FieldType.Textarea;
    placeholder?: string;
    label?: string | ReactNode;
    name?: string;
    required?: boolean;
    value?: string | number;
    options?: SelectOption[];
}