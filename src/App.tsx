import { useEffect } from 'react';
import AppRouter from "./components/AppRouter";
import { Header, Footer } from "./modules/index";
import { YMaps } from "@pbe/react-yandex-maps";
import { useAppDispatch } from "./app/hooks";
import { fetchContacts } from "./redux/reducers/ActionCreators";

const App = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, []);

    return (
        <YMaps query={{ lang: 'en_RU' }}>
            <div className="wrapper">
                <Header />
                <AppRouter />
                <Footer />
            </div>
        </YMaps>
    );
}

export default App;