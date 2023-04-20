import { Route } from '../interfaces/Route';
import { Shops, NotFound } from '../pages';
import { Pages } from '../enums/Page';

export const routes: Route[] = [{
    id: 0,
    ...Pages.Shops,
    component: Shops,
    exact: true
}, {
    id: 17,
    ...Pages.NotFound,
    component: NotFound
}];