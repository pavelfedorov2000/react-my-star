import { BannerNews } from "../components";
import { AboutCompany, Collections, PopularCategories } from "../modules";

const Home = () => {
    return (
        <main className="page">
            <div className="container">
                <PopularCategories />
                <Collections />
                <BannerNews title="Новости, тенденции, вдохновение" />
                <AboutCompany />
            </div>
        </main>
    );
};

export default Home;