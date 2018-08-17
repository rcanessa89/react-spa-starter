import { paths } from '@router';
import * as React from 'react';
import { SFC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IProtectedRouteProps {
  component: any;
  isAuthorized: boolean;
  nested?: any[];
};

const ProtectedRoute: SFC<IProtectedRouteProps> = ({
  component: Component,
  isAuthorized,
  nested = null,
  ...props
}) => {
  const protectedRootPath: string = paths.root;
  const renderComponent: SFC<any> = (renderProps: RouteProps) => {
    if (!isAuthorized) {
      return <Redirect to={protectedRootPath} />;
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
