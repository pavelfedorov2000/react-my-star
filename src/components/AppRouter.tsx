import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const AppRouter = () => {
    return (
        <Switch>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    exact={route.exact === true ? true : false}
                    path={route.path}
                    render={() => <route.component {...route} />}
                />
            ))}
            <Redirect to={ROUTES[ROUTES.length - 1].path} />
        </Switch>
    );
}

export default AppRouter;