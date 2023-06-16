import { FieldType } from "../enums/FieldType";
import { Field } from "./Field";
import { RangeSlider } from "./RangeSlider";

export interface DropFilter {
    name: string;
    fieldType: FieldType;
    items?: Field[];
    ranges?: RangeSlider[];
}

export interface CatalogFilter extends DropFilter {
    title: string;
}