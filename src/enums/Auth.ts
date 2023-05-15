export enum Auth {
    Enter = 'enter',
    Register = 'register',
    PasswordRecovery = 'password-recovery',
}

export enum EnterOption {
    Phone = 'phone',
    Login = 'login',
}

interface EnterOptiontype {
    name: string;
    text: string;
}

export const ENTER_OPTIONS: EnterOptiontype[] = [{
    name: EnterOption.Login,
    text: 'Войти с помощью номера телефона'
}, {
    name: EnterOption.Phone,
    text: 'Войти с помощью e-mail и пароля'
}];

export enum RegisterName {
    Name = 'REGISTER_NAME',
    Surname = 'REGISTER_SURNAME',
    Phone = 'REGISTER_PHONE',
    Email = 'REGISTER_EMAIL',
    Password = 'REGISTER_PASSWORD',
    RepeatPassword = 'REGISTER_REPEAT_PASSWORD',
}

export enum LoginName {
    Email = 'LOGIN_EMAIL',
    Password = 'LOGIN_PASSWORD',
}

export enum FieldCategory {
    Personal = 'personal',
    Password = 'Password',
}