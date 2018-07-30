import { history, routes } from '@router';
import * as React from 'react';
import { ReactElement } from 'react';
import { Router, Switch } from 'react-router-dom';
import { IAppRoute, IAppRouteProps } from '../interfaces';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

interface IAppRouterProps {
  isAuthorized: boolean;
};

interface IAppRouteState {
  isAuthorized: boolean;
};

class AppRouter extends React.PureComponent<IAppRouterProps, IAppRouteState> {
  public static state = {
    isAuthorized: false,
  };

  public render() {
    return (
      <Router history={history}>
        <Switch>{this.buildRouterRoutes(this.props.isAuthorized, routes)}</Switch>
      </Router>
    );
  }

  // Return a unique route element
  private buildRoute(isAuthorized: boolean, route: IAppRoute): ReactElement<IAppRouteProps> {
    if (route.public) {
      return (
        <PublicRoute
          key={route.path}
          isAuthorized={isAuthorized}
          component={route.component}
          {...route}
        />
      );
    }

    return (
      <ProtectedRoute
        key={route.path}
        isAuthorized={isAuthorized}
        component={route.component}
        {...route}
      />
    );
  }

  // Return an array of route elements with children routes
  private buildRouterRoutes(isAuthorized: boolean, routesArray: IAppRoute[]): Array<ReactElement<IAppRouteProps>> {
    return routesArray.map((route: any) => {
      if (route.children) {
        route = {
          ...route,
          children: this.buildRouterRoutes(isAuthorized, route.children),
        };
      }

      return this.buildRoute(isAuthorized, route);
    });
  }
}

export default AppRouter;
