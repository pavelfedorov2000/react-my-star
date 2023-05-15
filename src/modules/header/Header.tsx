import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BurgerMenu, CategoriesMenu, Menu, SearchBlock, Social } from '../../components';
import Logo from '../../components/logo/Logo';
import { Button } from '../../ui';
import { formatPhone } from '../../utils/formatPhone';
import { BurgerIcon, CartIcon, FavoriteIcon, SearchIcon, UserIcon } from '../../ui/icons';
import { Pages } from '../../enums/Page';
import { FilterParam } from '../../enums/Social';
import { ROUTES } from '../../constants/routes';
import { modalsSlice } from '../../redux/reducers/ModalsSlice';
import classNames from 'classnames';

const Header = () => {
    const dispatch = useAppDispatch();
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);
    const { isMenuOpen, isAuthOpen } = useAppSelector((state) => state.modalsReducer);
    
    const handleOpenMenu = () => {
        dispatch(modalsSlice.actions.openMenu());
        document.body.classList.add('_lock');
    }

    return (
        <header className="header">
            <div className="header__top">
                <div className={classNames('overlay', {
                    'active': isMenuOpen || isAuthOpen
                })}>
                    <BurgerMenu />
                </div>
                <div className="container header__top-inner">
                    <Social className="header" filterParam={FilterParam.Auth} />
                    <Button className="header__email" href={`mailto:${email}`} text={email} contact transparent />
                    <div className="header__phones">
                        {phones.map((phone, index) => (
                            <Button key={index} className="phone" href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                        ))}
                    </div>
                    <Button className="header__callback" style="link-accent" text="Заказать звонок" transparent />
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <div className="header__main-inner">
                        <Button onClick={handleOpenMenu} style="burger" icon={<BurgerIcon />} ariaControls="menu" transparent />
                        <Logo className="header__logo" />
                        <Menu className="header__menu" items={ROUTES.filter((route) => route.inHeader)} />
                        <div className="header__actions">
                            <SearchBlock />
                            <Button className="header__action mob-search-btn" icon={<SearchIcon />} ariaLabel="Открыть поиск" expanded={false} />
                            <Button href={Pages.Favorite.path} className="header__action" icon={<FavoriteIcon />} ariaLabel="Открыть избранное" transparent />
                            <Button className="header__action" icon={<UserIcon />} ariaLabel="Авторизоваться" transparent />
                            <Button href={Pages.Cart.path} className="header__action" icon={<CartIcon />} ariaLabel="Перейти в корзину" transparent />
                        </div>
                    </div>
                    <CategoriesMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;