import { Route } from '../interfaces/Route';
import { Shops, Delivery, Guarantee, NotFound, Sale, Catalog, About } from '../pages';
import { Pages } from '../enums/Page';

export const ROUTES: Route[] = [{
    id: 0,
    ...Pages.Sale,
    component: Sale,
    exact: true
}, {
    id: 1,
    ...Pages.Catalog,
    component: Catalog,
    exact: true
}, {
    id: 2,
    ...Pages.About,
    component: About,
    exact: true
}, {
    id: 3,
    ...Pages.Shops,
    component: Shops,
    exact: true
}, {
    id: 4,
    ...Pages.Delivery,
    component: Delivery,
    exact: true
}, {
    id: 5,
    ...Pages.Guarantee,
    component: Guarantee,
    exact: true
}, {
    id: 17,
    ...Pages.NotFound,
    component: NotFound
}];