import { Banner, BannerNews } from "../components";
import { BannerVariant } from "../enums/BannerVariant";
import { ClassName } from "../enums/ClassName";
import { AboutCompany, Collections, PopularCategories, SalePoints } from "../modules";
import { generatePageClassName } from "../utils/generatePageClassName";

const Home = () => {
    return (
        <main className={generatePageClassName()}>
            <div className={ClassName.Container}>
                <Banner variant={BannerVariant.WithoutButton} />
                <PopularCategories />
                <Collections />
                <BannerNews title="Новости, тенденции, вдохновение" />
                <AboutCompany />
                <Banner variant={BannerVariant.WithButton} />
                <SalePoints />
            </div>
        </main>
    );
};

export default Home;