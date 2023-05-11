import { FieldType } from "../enums/FieldType";

export interface Field {
    fieldType?: FieldType.Tel | FieldType.Email | FieldType.Password | FieldType.Textarea;
    placeholder: string;
    label?: string;
    name: string;
}