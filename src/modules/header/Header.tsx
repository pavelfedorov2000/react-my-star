import Logo from '../../components/logo/Logo';

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-inner">
                    <a className="email header__email" href="mailto:sales@mystar.by">sales@mystar.by</a>
                    <div className="header__phones">
                        <a className="phone header__phone" href="tel:+375339915229">+375 (33) 991-52-29</a>
                        <a className="phone header__phone" href="tel:+375295481272">+375 (29) 548-12-72</a>
                    </div>
                    <a href="#callback" className="callback header__callback">
                        Заказать звонок
                    </a>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main-inner">
                        <Logo />
                        <nav className="menu header__menu">
                            <ul className="header__menu-list">
                                <li className="header__menu-item"><a href="#" className="menu__link">% Акции</a></li>
                                <li className="header__menu-item"><a href="#" className="menu__link">Каталог</a></li>
                                <li className="header__menu-item"><a href="#" className="menu__link">О нас</a></li>
                                <li className="header__menu-item"><a href="#" className="menu__link">Магазины</a></li>
                                <li className="header__menu-item"><a href="#" className="menu__link">Доставка и оплата</a></li>
                                <li className="header__menu-item"><a href="#" className="menu__link">Гарантия</a></li>
                            </ul>
                        </nav>
                        <div className="header__actions">
                            <button className="header__action mob-search-btn" type="button" aria-label="Открыть поиск"
                                aria-expanded="false">
                                <img src="assets/images/icons/search.svg" alt="иконка поиска" width="24" height="24" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;