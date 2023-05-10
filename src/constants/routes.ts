import { Route } from '../interfaces/Route';
import { Shops, Delivery, Guarantee, NotFound, Sale } from '../pages';
import { Pages } from '../enums/Page';

export const routes: Route[] = [{
    id: 0,
    ...Pages.Shops,
    component: Shops,
    exact: true
}, {
    id: 1,
    ...Pages.Delivery,
    component: Delivery,
    exact: true
}, {
    id: 2,
    ...Pages.Guarantee,
    component: Guarantee,
    exact: true
}, {
    id: 3,
    ...Pages.Sale,
    component: Sale,
    exact: true
}, {
    id: 17,
    ...Pages.NotFound,
    component: NotFound
}];