import Logo from "../../components/logo/Logo";
import payment from "../../assets/images/payment.png";
import { Social } from "../../components";
import { FilterParam } from "../../enums/Social";
import { useAppSelector } from "../../app/hooks";
import { Button, Img } from "../../ui";
import { formatPhone } from "../../utils/formatPhone";
import { generateEmailHref } from "../../utils/generateEmailHref";
import { MENU_LIST } from "../../constants/menu-list";
import { Pages } from "../../enums/Page";

const footerMenu = [{
    title: 'Каталог',
    list: {
        items: [...MENU_LIST]
    }
}, {
    title: 'Интернет-магазин',
    list: {
        items: [{
            href: Pages.Delivery.path,
            title: Pages.Delivery.title
        }, {
            href: Pages.Guarantee.path,
            title: Pages.Guarantee.title
        }, {
            href: Pages.Sale.path,
            title: Pages.Sale.title
        }]
    }
}, {
    title: 'О нас',
    list: {
        items: [{
            href: Pages.About.path,
            title: 'О компании'
        }, {
            href: Pages.Shops.path,
            title: Pages.Shops.title
        }]
    }
}];

const Footer = () => {
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="row footer__top-inner">
                        <div className="footer__logo">
                            <Logo />
                        </div>
                        <div className="footer__contacts">
                            {phones.map((phone, index) => (
                                <Button key={index} className="footer__phone" href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                            ))}
                            <Button className="footer__email" href={generateEmailHref(email)} text={email} contact transparent />
                            <Button className="footer__callback" style="link-accent" text="Заказать звонок" transparent />
                        </div>
                        <Social className="footer" filterParam={FilterParam.Auth} />
                    </div>
                </div>
            </div>
            <div className="footer__main">
                <div className="container">
                    <div className="row footer__main-inner">
                        <div className="footer__menu">
                            {footerMenu.map((col, index) => (
                                <div key={index} className="footer__menu-col">
                                    <div className="footer__menu-title">{col.title}</div>
                                    <ul className="footer__menu-list">
                                        {col.list.items.map((item) => (
                                            <li key={item.href.toString()}>
                                                <Button href={item.href} className="footer__menu-link" text={item.title} transparent />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="footer__info">
                            <div className="footer__copy">©2022 ОАО «Ивацевичдрев»</div>
                            <address className="footer__address">225 295, Беларусь, Брестская&nbsp;обл., г.&nbsp;Ивацевичи,
                                ул.&nbsp;Загородная,&nbsp;2
                            </address>
                            <a href="https://mystar.by/politika-konfidencialnosti/" target="_blank" className="footer__politics">Политика конфеденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row footer__bottom-inner">
                        <div className="footer__payment">
                            <Img src={payment} alt="платежные системы" width={296} height={20} />
                        </div>
                        <div className="footer__evidence">
                            Свидетельство о государственной регистрации организации №&nbsp;200100328, выдано Брестским областным
                            исполнительным
                            комитетом 07.07.2000г." и "Интернет магазин включен в торговый реестр Министерства торговли
                            Республики
                            Беларусь за №424020 от 17.08.2018г
                        </div>
                        <div className="footer__developer">
                            <span>Дизайн и разработка:</span>
                            <a href="https://www.imedia.by/" target="_blank" className="footer__developer-link">
                                <svg className="footer__developer-logo" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.00453 0V13.9211H0V0H4.00453Z" fill="#616161" />
                                    <path
                                        d="M23.1 0V13.9211H19.0954V6.23983L16.3781 13.9211H13.0273L10.2895 6.18059V13.9211H6.28502V0H11.1272L14.7436 9.0438L18.2782 0H23.1Z"
                                        fill="#616161" />
                                    <path
                                        d="M29.384 3.10017V5.37099H33.9811V8.31319H29.384V10.821H34.594V13.9211H25.3795V0H34.594V3.10017H29.384Z"
                                        fill="#616161" />
                                    <path
                                        d="M42.2731 0C43.785 0 45.1063 0.296194 46.2368 0.888583C47.381 1.46781 48.2595 2.28399 48.8724 3.33712C49.4854 4.39026 49.7918 5.59478 49.7918 6.95069C49.7918 8.29344 49.4786 9.49138 48.852 10.5445C48.2391 11.5977 47.3605 12.427 46.2164 13.0326C45.0858 13.6249 43.7714 13.9211 42.2731 13.9211H36.5728V0H42.2731ZM41.9667 10.505C43.1381 10.505 44.0575 10.1957 44.7249 9.57695C45.3923 8.95823 45.726 8.08282 45.726 6.95069C45.726 5.80541 45.3923 4.92341 44.7249 4.30469C44.0575 3.67281 43.1381 3.35687 41.9667 3.35687H40.5773V10.505H41.9667Z"
                                        fill="#616161" />
                                    <path d="M55.6015 0V13.9211H51.597V0H55.6015Z" fill="#616161" />
                                    <path
                                        d="M66.9944 11.6503H61.8865L61.1101 13.9211H56.9013L62.1521 0H66.7696L72 13.9211H67.7707L66.9944 11.6503ZM65.9932 8.68837L64.4404 4.18621L62.9081 8.68837H65.9932Z"
                                        fill="#616161" />
                                    <path
                                        d="M2.84565 23.9999C2.31253 23.9999 1.83479 23.9165 1.41244 23.7496C0.990093 23.5828 0.65083 23.3358 0.394653 23.0087C0.145398 22.6816 0.0138475 22.2878 0 21.8272H1.89018C1.91787 22.0875 2.01134 22.2878 2.17059 22.4279C2.32983 22.5615 2.53755 22.6282 2.79372 22.6282C3.05683 22.6282 3.26454 22.5715 3.41686 22.458C3.56918 22.3378 3.64534 22.1743 3.64534 21.9674C3.64534 21.7938 3.58303 21.6503 3.4584 21.5368C3.3407 21.4233 3.19184 21.3299 3.01182 21.2565C2.83873 21.183 2.58947 21.0996 2.26406 21.0061C1.79325 20.866 1.40898 20.7258 1.11126 20.5856C0.813538 20.4454 0.55736 20.2385 0.342725 19.9648C0.128089 19.6911 0.0207712 19.334 0.0207712 18.8934C0.0207712 18.2393 0.266563 17.7286 0.758148 17.3615C1.24973 16.9877 1.89018 16.8008 2.67948 16.8008C3.48264 16.8008 4.13 16.9877 4.62159 17.3615C5.11317 17.7286 5.37627 18.2426 5.41089 18.9035H3.48956C3.47571 18.6765 3.38916 18.4996 3.22992 18.3728C3.07067 18.2393 2.86642 18.1725 2.61717 18.1725C2.40253 18.1725 2.22944 18.2293 2.09789 18.3427C1.96634 18.4495 1.90056 18.6064 1.90056 18.8133C1.90056 19.0403 2.01134 19.2172 2.2329 19.344C2.45446 19.4708 2.80065 19.6077 3.27146 19.7545C3.74227 19.9081 4.12308 20.0549 4.41388 20.1951C4.7116 20.3353 4.96777 20.5389 5.18241 20.8059C5.39705 21.0729 5.50436 21.4167 5.50436 21.8372C5.50436 22.2377 5.39705 22.6015 5.18241 22.9286C4.9747 23.2557 4.67005 23.516 4.26848 23.7096C3.8669 23.9032 3.39263 23.9999 2.84565 23.9999Z"
                                        fill="#616161" />
                                    <path d="M8.37322 22.6082H10.6996V23.9299H6.59728V16.9009H8.37322V22.6082Z" fill="#616161" />
                                    <path d="M16.4367 16.9009V18.2727H14.505V23.9299H12.729V18.2727H10.7973V16.9009H16.4367Z" fill="#616161" />
                                    <path
                                        d="M23.9211 23.9299H22.1451L19.1749 19.5943V23.9299H17.3989V16.9009H19.1749L22.1451 21.2565V16.9009H23.9211V23.9299Z"
                                        fill="#616161" />
                                    <path
                                        d="M28.0592 23.9999C27.526 23.9999 27.0483 23.9165 26.6259 23.7496C26.2036 23.5828 25.8643 23.3358 25.6082 23.0087C25.3589 22.6816 25.2274 22.2878 25.2135 21.8272H27.1037C27.1314 22.0875 27.2249 22.2878 27.3841 22.4279C27.5433 22.5615 27.7511 22.6282 28.0072 22.6282C28.2703 22.6282 28.478 22.5715 28.6304 22.458C28.7827 22.3378 28.8589 22.1743 28.8589 21.9674C28.8589 21.7938 28.7965 21.6503 28.6719 21.5368C28.5542 21.4233 28.4053 21.3299 28.2253 21.2565C28.0522 21.183 27.803 21.0996 27.4776 21.0061C27.0068 20.866 26.6225 20.7258 26.3248 20.5856C26.027 20.4454 25.7709 20.2385 25.5562 19.9648C25.3416 19.6911 25.2343 19.334 25.2343 18.8934C25.2343 18.2393 25.4801 17.7286 25.9717 17.3615C26.4632 16.9877 27.1037 16.8008 27.893 16.8008C28.6961 16.8008 29.3435 16.9877 29.8351 17.3615C30.3267 17.7286 30.5898 18.2426 30.6244 18.9035H28.7031C28.6892 18.6765 28.6027 18.4996 28.4434 18.3728C28.2842 18.2393 28.0799 18.1725 27.8307 18.1725C27.616 18.1725 27.4429 18.2293 27.3114 18.3427C27.1798 18.4495 27.1141 18.6064 27.1141 18.8133C27.1141 19.0403 27.2249 19.2172 27.4464 19.344C27.668 19.4708 28.0142 19.6077 28.485 19.7545C28.9558 19.9081 29.3366 20.0549 29.6274 20.1951C29.9251 20.3353 30.1813 20.5389 30.3959 20.8059C30.6106 21.0729 30.7179 21.4167 30.7179 21.8372C30.7179 22.2377 30.6106 22.6015 30.3959 22.9286C30.1882 23.2557 29.8836 23.516 29.482 23.7096C29.0804 23.9032 28.6061 23.9999 28.0592 23.9999Z"
                                        fill="#616161" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M70.107 22.1738L71.9959 22.1738L71.9959 20.145L70.107 20.145L70.107 18.3193L68.0078 18.3193L68.0078 20.145L66.1182 20.145L66.1182 22.1738L68.0078 22.1738L68.0078 24L70.107 24L70.107 22.1738Z"
                                        fill="#C2C2C2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;