import { fetchDataCancel } from '@actions/fetch';
import { routerSetState } from '@actions/router';
import { AuthContainer } from '@containers';
import { IAppRoute, IAuth, IRouteState, IStore } from '@interfaces';
import { history, routes } from '@router';
import store from '@store';
import { CreateAsyncComponent, guid } from '@utils';
import { UnregisterCallback } from 'history';
import * as React from 'react';
import { ReactElement } from 'react';
import { Route, RouteProps, Router, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

interface IAppRouteProps extends RouteProps {
  isAuthorized: boolean;
};

export class AppRouter extends React.Component<IAuth> {
  private unlisten: UnregisterCallback;

  public componentDidMount(): void {
    const initialState: IRouteState = {
      action: history.action,
      location: history.location,
    };

    this.dispatchRouteChange(initialState);

    this.unlisten = history.listen((location, action) => {
      const state: IStore = store.getState();

      if (state.fetch.loading) {
        store.dispatch(fetchDataCancel());
      }

      const fromRouterState: IRouteState = state.router.current;
      const currentRouterState: IRouteState = { location, action };

      this.dispatchRouteChange(currentRouterState, fromRouterState);
    });
  }

  public componentWillUnmount(): void {
    this.unlisten();
  }

  public shouldComponentUpdate(nextProps: IAuth): boolean {
    return this.props.isAuthorized !== nextProps.isAuthorized;
  }

  public render(): React.ReactNode {
    const routerRoutes = this.buildRouterRoutes(this.props.isAuthorized, routes);

    return (
      <Router history={history}>
        <Switch>
          {routerRoutes}
          <Route component={CreateAsyncComponent(() => import('@pages/NotFound'))} />
        </Switch>
      </Router>
    );
  }

  // Return a unique route element
  private buildRoute(isAuthorized: boolean, route: IAppRoute): ReactElement<IAppRouteProps> {
    const key = guid();

    if (route.public) {
      return (
        <PublicRoute
          key={key}
          isAuthorized={isAuthorized}
          component={route.component}
          {...route}
        />
      );
    }

    return (
      <ProtectedRoute
        key={key}
        isAuthorized={isAuthorized}
        component={route.component}
        {...route}
      />
    );
  }

  // Return an array of route elements with nested routes
  private buildRouterRoutes(isAuthorized: boolean, routesArray: IAppRoute[]): Array<ReactElement<IAppRouteProps>> {
    return routesArray.map((route: any) => {
      if (route.nested) {
        route = {
          ...route,
          nested: this.buildRouterRoutes(isAuthorized, route.nested),
        };
      }

      return this.buildRoute(isAuthorized, route);
    });
  }

  private dispatchRouteChange(current: IRouteState, from?: IRouteState) {
    const fromValue: IRouteState | null = from || null;

    store.dispatch(routerSetState({
      current,
      from: fromValue,
    }));
  }
}

export default AuthContainer(AppRouter);
