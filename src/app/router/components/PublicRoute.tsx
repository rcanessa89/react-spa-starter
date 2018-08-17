import * as React from 'react';
import { SFC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import paths from '../config/paths';

interface IPublicRouteProps {
  component: any;
  isAuthorized: boolean;
  nested?: any[];
}

const PublicRoute: SFC<IPublicRouteProps> = ({
  component: Component,
  isAuthorized,
  nested = null,
  ...props
}) => {
  const publicRootPath: string = paths.home;
  const renderComponent: SFC<any> = (renderProps: RouteProps) => {
    if (isAuthorized) {
      return <Redirect to={publicRootPath} />;
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

export default PublicRoute;
