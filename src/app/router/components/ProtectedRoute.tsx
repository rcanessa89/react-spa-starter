import { IAppRoute } from '@interfaces';
import { paths } from '@router';
import * as React from 'react';
import { SFC } from 'react';
import {
  matchPath,
  Redirect,
  Route,
  RouteProps
} from 'react-router-dom';

interface IProtectedRouteProps extends IAppRoute {
  component: any;
  isAuthorized: boolean;
};

const ProtectedRoute: SFC<IProtectedRouteProps> = ({
  component: Component,
  isAuthorized,
  nested = null,
  abstract = false,
  ...props
}) => {
  const renderComponent: SFC<any> = (renderProps: RouteProps) => {
    const matchParams = {
      exact: !!props.exact,
      path: props.path,
      strict: !!props.strict,
    };
    const isMatchPath = matchPath(
      renderProps.location!.pathname,
      matchParams
    );

    if (isMatchPath!.isExact && abstract) {
      return <Redirect to={paths.noMatch} />;
    }

    if (!isAuthorized) {
      return <Redirect to={paths.protectedRouteRedirect} />;
    }

    return (
      <Component
        {...renderProps}
        nested={nested}
      />
    );
  };

  return (
    <Route
      {...props}
      render={renderComponent}
    />
  );
};

export default ProtectedRoute;
