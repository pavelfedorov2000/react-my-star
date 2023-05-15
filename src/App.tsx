import { useEffect } from 'react';
import AppRouter from "./components/AppRouter";
import { Header, Footer } from "./modules/index";
import { YMaps } from "@pbe/react-yandex-maps";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchContacts, fetchShops } from "./redux/reducers/ActionCreators";
import classNames from 'classnames';
import { AsidePopup } from './components';
import { AsidePopup as AsidePopupType } from './interfaces/AsidePopup';
import { Auth } from './enums/Auth';

const App = () => {
    const dispatch = useAppDispatch();
    const { isAuthOpen, isPasswordRecoveryOpen } = useAppSelector((state) => state.modalsReducer);

    const ASIDE_POPUPS: AsidePopupType[] = [{
        id: "auth",
        title: "Авторизация",
        text: "Войдите или зарегистрируйтесь, чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.",
        active: isAuthOpen
    }, {
        id: Auth.PasswordRecovery,
        title: "Восстановление пароля",
        text: "Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля",
        active: isPasswordRecoveryOpen
    }];

    useEffect(() => {
        dispatch(fetchContacts());
        dispatch(fetchShops());
    }, []);

    return (
        <YMaps query={{ lang: 'en_RU' }}>
            <div className="wrapper">
                <Header />
                <AppRouter />
                <Footer />
                <div className={classNames('overlay', {
                    'active': isAuthOpen
                })}>
                    {ASIDE_POPUPS.map((popup) => (
                        <AsidePopup key={popup.id} {...popup} />
                    ))}
                </div>
            </div>
        </YMaps>
    );
}

export default App;