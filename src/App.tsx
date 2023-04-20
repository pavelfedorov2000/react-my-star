import AppRouter from "./components/AppRouter";
import { Header, Footer } from "./modules/index";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;