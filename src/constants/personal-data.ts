import { FieldType } from "../enums/FieldType";
import { PersonalData } from "../enums/PersonalData";
import { Field } from "../interfaces/Field";

export const PERSONAL_DATA: Field[] = [{
    name: PersonalData.ORDER_SURNAME,
    placeholder: "Фамилия",
    label: "Фамилия",
}, {
    name: PersonalData.ORDER_NAME,
    placeholder: "Имя",
    label: "Имя",
}, {
    name: PersonalData.ORDER_PATRONYMIC,
    placeholder: "Отчетсво",
    label: "Отчетсво",
    }, {
    fieldType: FieldType.Select,
    name: PersonalData.ORDER_OWNERSHIP,
    options: [{
        selected: true,
        text: 'Физическое лицо'
    }, {
        text: 'Юридическое лицо'
    }]
}, {
    name: PersonalData.ORDER_PHONE,
    placeholder: "Телефон",
    label: "Телефон",
}, {
    name: PersonalData.ORDER_EMAIL,
    placeholder: "E-mail",
    label: "E-mail",
}, {
    name: PersonalData.ORDER_CITY,
    placeholder: "Город",
    label: "Город",
}, {
    name: PersonalData.ORDER_ADDRESS,
    placeholder: "Адрес доставки",
    label: "Адрес доставки",
}];