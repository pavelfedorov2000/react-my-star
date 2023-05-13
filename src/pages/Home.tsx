import { Banner, BannerNews } from "../components";
import { AboutCompany, Collections, PopularCategories, SalePoints } from "../modules";

const Home = () => {
    return (
        <main className="page">
            <div className="container">
                <Banner variant="first" />
                <PopularCategories />
                <Collections />
                <BannerNews title="Новости, тенденции, вдохновение" />
                <AboutCompany />
                <Banner variant="second" />
                <SalePoints />
            </div>
        </main>
    );
};

export default Home;