import AppRouter from "./components/AppRouter";
import { Header, Footer } from "./modules/index";
import { YMaps } from "@pbe/react-yandex-maps";

const App = () => {
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