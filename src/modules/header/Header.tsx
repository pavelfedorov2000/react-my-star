import { ReactNode } from "react";
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
import { generateEmailHref } from '../../utils/generateEmailHref';

interface HeaderAction {
    className?: string;
    href?: string;
    icon: ReactNode;
    ariaLabel: string;
    expanded?: boolean;
    transparent?: boolean;
}

const HEADER_ACTIONS: HeaderAction[] = [{
    className: 'mob-search-btn',
    icon: <SearchIcon />,
    ariaLabel: 'Открыть поиск'
}, {
    href: Pages.Favorite.path,
    icon: <FavoriteIcon />,
    ariaLabel: 'Открыть избранное',
    transparent: true
}, {
    icon: <UserIcon />,
    ariaLabel: 'Авторизоваться',
    transparent: true
}, {
    href: Pages.Cart.path,
    icon: <CartIcon />,
    ariaLabel: 'Перейти в корзину',
    transparent: true
}];

const mainClass = 'header';

const Header = () => {
    const dispatch = useAppDispatch();
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);
    const { isMenuOpen, isAuthOpen } = useAppSelector((state) => state.modalsReducer);

    const handleOpenMenu = () => {
        dispatch(modalsSlice.actions.openMenu());
        document.body.classList.add('_lock');
    }

    return (
        <header className={mainClass}>
            <div className={`${mainClass}__top`}>
                <div className={classNames('overlay', {
                    'active': isMenuOpen || isAuthOpen
                })}>
                    <BurgerMenu />
                </div>
                <div className={`container ${mainClass}__top-inner`}>
                    <Social className={mainClass} filterParam={FilterParam.Auth} />
                    <Button className={`${mainClass}__email`} href={generateEmailHref(email)} text={email} contact transparent />
                    <div className={`${mainClass}__phones`}>
                        {phones.map((phone, index) => (
                            <Button key={index} className={`${mainClass}__phone`} href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                        ))}
                    </div>
                    <Button className={`${mainClass}__callback`} style="link-accent" text="Заказать звонок" transparent />
                </div>
            </div>
            <div className={`${mainClass}__main`}>
                <div className="container">
                    <div className={`${mainClass}__main-inner`}>
                        <Button onClick={handleOpenMenu} style="burger" icon={<BurgerIcon />} ariaControls="menu" transparent />
                        <Logo className={`${mainClass}__logo`} />
                        <Menu className={`${mainClass}__menu`} items={ROUTES.filter((route) => route.inHeader)} />
                        <div className={`${mainClass}__actions`}>
                            <SearchBlock />
                            {HEADER_ACTIONS.map((action, index) => (
                                <Button key={index} className={classNames(`${mainClass}__action`, action.className)} {...action} />
                            ))}
                        </div>
                    </div>
                    <CategoriesMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;