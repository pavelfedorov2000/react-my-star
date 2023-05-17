import { Route } from '../interfaces/Route';
import { Home, Shops, Delivery, Guarantee, NotFound, Sale, Catalog, About, Profile, Checkout, Cart } from '../pages';
import { Pages, SubPages } from '../enums/Page';
import { Discounts, Orders, Personal, Subscribes } from '../modules';

export const ROUTES: Route[] = [{
    id: 0,
    ...Pages.Home,
    component: Home,
    exact: true
}, {
    id: 1,
    ...Pages.Sale,
    component: Sale,
}, {
    id: 2,
    ...Pages.Catalog,
    component: Catalog,
}, {
    id: 3,
    ...Pages.About,
    component: About,
}, {
    id: 4,
    ...Pages.Shops,
    component: Shops,
}, {
    id: 5,
    ...Pages.Delivery,
    component: Delivery,
}, {
    id: 6,
    ...Pages.Guarantee,
    component: Guarantee,
}, {
    id: 6,
    ...Pages.Guarantee,
    component: Guarantee,
}, {
    id: 7,
    profile: true,
    ...SubPages.CurrentOrders,
    component: Profile,
    SubPage: Orders,
}, {
    id: 8,
    profile: true,
    ...SubPages.OrdersHistory,
    component: Profile,
    SubPage: Orders,
}, {
    id: 9,
    profile: true,
    ...SubPages.Discounts,
    component: Profile,
    SubPage: Discounts,
}, {
    id: 10,
    profile: true,
    exact: true,
    ...SubPages.Subscribes,
    component: Profile,
    SubPage: Subscribes,
}, {
    id: 11,
    profile: true,
    exact: true,
    ...SubPages.Personal,
    component: Profile,
    SubPage: Personal,
}, {
    id: 12,
    ...Pages.Cart,
    component: Cart,
}, {
    id: 13,
    ...Pages.Checkout,
    component: Checkout,
}, {
    id: 14,
    ...Pages.NotFound,
    component: NotFound
}];