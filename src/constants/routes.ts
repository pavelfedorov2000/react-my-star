import { Route } from '../interfaces/Route';
import { Home, Shops, Delivery, Guarantee, NotFound, Sale, Catalog, About } from '../pages';
import { Pages } from '../enums/Page';

export const ROUTES: Route[] = [{
    id: 0,
    ...Pages.Home,
    component: Home,
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
    id: 7,
    ...Pages.NotFound,
    component: NotFound
}];