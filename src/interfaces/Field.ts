import { ReactNode } from "react";
import { FieldType } from "../enums/FieldType";
import { SelectOption } from "./SelectOption";

export interface Field {
    fieldType?: FieldType.Tel | FieldType.Email | FieldType.Password | FieldType.Number | FieldType.Checkbox | FieldType.Radio | FieldType.Textarea | FieldType.Select;
    label?: string | ReactNode;
    placeholder?: string;
    name?: string;
    value?: string | number;
    options?: SelectOption[];
    checked?: boolean;
    required?: boolean;
}