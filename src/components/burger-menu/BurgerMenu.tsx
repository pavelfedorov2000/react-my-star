import classNames from "classnames";
import { MENU_LIST } from "../../constants/menu-list";
import { Button } from "../../ui";
import CategoriesMenu from "../categories-menu/CategoriesMenu";
import Logo from "../logo/Logo";
import Social from "../social/Social";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { formatPhone } from "../../utils/formatPhone";
import Menu from "../menu/Menu";
import { ROUTES } from "../../constants/routes";
import { FilterParam } from "../../enums/Social";
import { CloseIcon, DownloadIcon } from "../../ui/icons";
import { modalsSlice } from "../../redux/reducers/ModalsSlice";
import { generateEmailHref } from "../../utils/generateEmailHref";

const menuList = [
    {
        icon: <DownloadIcon />,
        href: '#',
        title: 'Каталог'
    },
    ...MENU_LIST
];

const BurgerMenu = () => {
    const dispatch = useAppDispatch();
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);
    const { isMenuOpen } = useAppSelector((state) => state.modalsReducer);
    
    const handleClose = () => {
        dispatch(modalsSlice.actions.closeMenu());
        document.body.classList.remove('_lock');
    }

    return (
        <div id="menu" className={classNames('burger-menu', {
            'active': isMenuOpen
        })}>
            <div className="burger-menu__top">
                <Button onClick={handleClose} className="close-btn burger-menu__close" icon={<CloseIcon />} transparent />
                <Logo className="burger-menu__logo" />
                <Button className="burger-menu__callback" style="link-accent" text="Заказать звонок" transparent />
            </div>
            <CategoriesMenu />
            <ul className="burger-menu__list">
                {menuList.map((item, index) => (
                    <li key={index} className="burger-menu__list-item">
                        <Button className={classNames('burger-menu__link', {
                            'burger-menu__link--download': index === 0
                        })} {...item} text={item.title} transparent />
                    </li>
                ))}
            </ul>
            <Menu className="burger-menu__nav" items={ROUTES.filter((route) => route.inHeader).slice(2)} />
            <div className="burger-menu__contacts">
                <div className="burger-menu__phones">
                    {phones.map((phone, index) => (
                        <Button key={index} className="phone" href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                    ))}
                </div> 
                <Button className="burger-menu__callback" style="link-accent" text="Заказать звонок" transparent />
            </div>
            <Button className="burger-menu__email" href={generateEmailHref(email)} text={email} contact transparent />
            <Social className="burger-menu" filterParam={FilterParam.Auth} />
        </div>
    );
};

export default BurgerMenu;