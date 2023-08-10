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
import { Pages } from "../../enums/Page";

const menuList = [
    {
        icon: <DownloadIcon />,
        href: '#',
        title: Pages.Catalog.title
    },
    ...MENU_LIST
];

const mainClass = 'burger-menu';
const MENU_ID = 'menu';

const BurgerMenu = () => {
    const dispatch = useAppDispatch();
    const { email, phones } = useAppSelector((state) => state.contactsReducer.data);
    const { isMenuOpen } = useAppSelector((state) => state.modalsReducer);

    const handleClose = () => {
        dispatch(modalsSlice.actions.closeMenu());
        document.body.classList.remove('_lock');
    }

    return (
        <div id={MENU_ID} className={classNames(mainClass, {
            'active': isMenuOpen
        })}>
            <div className={`${mainClass}__top`}>
                <Button onClick={handleClose} className={`close-btn ${mainClass}__close`} icon={<CloseIcon />} transparent />
                <Logo className={`${mainClass}__logo`} />
                <Button className={`${mainClass}__callback`} style="link-accent" text="Заказать звонок" transparent />
            </div>
            <CategoriesMenu />
            <ul className={`${mainClass}__list`}>
                {menuList.map((item, index) => (
                    <li key={index} className={`${mainClass}__list-item`}>
                        <Button className={classNames(`${mainClass}__link`, {
                            [`${mainClass}__link--download`]: index === 0
                        })} {...item} text={item.title} transparent />
                    </li>
                ))}
            </ul>
            <Menu className={`${mainClass}__nav`} items={ROUTES.filter((route) => route.inHeader).slice(2)} />
            <div className={`${mainClass}__contacts`}>
                <div className={`${mainClass}__phones`}>
                    {phones.map((phone, index) => (
                        <Button key={index} className="phone" href={`tel:${formatPhone(phone)}`} text={phone} contact transparent />
                    ))}
                </div>
                <Button className={`${mainClass}__callback`} style="link-accent" text="Заказать звонок" transparent />
            </div>
            <Button className={`${mainClass}__email`} href={generateEmailHref(email)} text={email} contact transparent />
            <Social className={mainClass} filterParam={FilterParam.Auth} />
        </div>
    );
};

export default BurgerMenu;