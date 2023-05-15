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
    placeholder: "Имя*",
}, {
    name: RegisterName.Surname,
    placeholder: "Фамилия*",
}, {
    name: RegisterName.Phone,
    placeholder: "Ваш телефон*",
}, {
    name: RegisterName.Email,
    placeholder: "Ваш e-mail*",
}, {
    name: RegisterName.Password,
    placeholder: "Придумайте пароль*",
    fieldType: FieldType.Password,
}, {
    name: RegisterName.RepeatPassword,
    placeholder: "Повторите пароль*",
    fieldType: FieldType.Password,
}];

export const AUTH_TABS: AuthTab[] = [{
    name: Auth.Enter,
    title: 'Вход',
    fields: LOGIN_FIELDS
}, {
    name: Auth.Register,
    title: 'Регистрация',
    fields: REGISTER_FIELDS
}];