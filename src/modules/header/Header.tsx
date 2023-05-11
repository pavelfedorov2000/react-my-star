import { useAppSelector } from '../../app/hooks';
import { Menu } from '../../components';
import Logo from '../../components/logo/Logo';
import { Button } from '../../ui';
import { formatPhone } from '../../utils/formatPhone';

const Header = () => {
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);

    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-inner">
                    <Button className="header__email" href={`mailto:${email}`} text={email} contact transparent />
                    <div className="header__phones">
                        {phones.map((phone) => (
                            <Button className="header__email" href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                        ))}
                    </div>
                    <Button className="header__callback" style="link-accent" text="Заказать звонок" transparent />
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main-inner">
                        <Logo className="header__logo" />
                        <Menu className="header__menu" />
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