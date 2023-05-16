import { ReactNode } from "react";
import { FieldType } from "../enums/FieldType";

export interface Field {
    fieldType?: FieldType.Tel | FieldType.Email | FieldType.Password | FieldType.Checkbox | FieldType.Radio | FieldType.Textarea;
    placeholder?: string;
    label?: string | ReactNode;
    name: string;
    required?: boolean;
}