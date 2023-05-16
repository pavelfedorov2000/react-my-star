import { Auth, LoginName, RegisterName } from "../enums/Auth";
import { FieldType } from "../enums/FieldType";
import { AuthTab } from "../interfaces/AuthTab";
import { Field } from "../interfaces/Field";

export const LOGIN_FIELDS: Field[] = [{
    name: LoginName.Email,
    placeholder: "Ваш e-mail",
    label: "Ваш e-mail"
}, {
    name: LoginName.Password,
    placeholder: "Пароль",
    label: "Пароль",
    fieldType: FieldType.Password,
}];

export const REGISTER_FIELDS: Field[] = [{
    name: RegisterName.Name,
    placeholder: "Имя",
    label: "Имя",
    required: true
}, {
    name: RegisterName.Surname,
    placeholder: "Фамилия",
    label: "Фамилия",
    required: true
}, {
    name: RegisterName.Phone,
    placeholder: "Ваш телефон",
    label: "Ваш телефон",
    required: true
}, {
    name: RegisterName.Email,
    placeholder: "Ваш e-mail",
    label: "Ваш e-mail",
    required: true
}, {
    name: RegisterName.Password,
    placeholder: "Придумайте пароль",
    label: "Придумайте пароль",
    fieldType: FieldType.Password,
    required: true
}, {
    name: RegisterName.RepeatPassword,
    placeholder: "Повторите пароль",
    label: "Повторите пароль",
    fieldType: FieldType.Password,
    required: true
}];

export const AUTH_TABS: AuthTab[] = [{
    name: Auth.Enter,
    title: 'Вход',
    fields: LOGIN_FIELDS,
}, {
    name: Auth.Register,
    title: 'Регистрация',
    fields: REGISTER_FIELDS,
}];