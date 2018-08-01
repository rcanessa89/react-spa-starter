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
  component,
  isAuthorized,
  nested = null,
  ...props
}) => {
  const protectedRootPath: string = paths.root;
  const redirect: React.ReactElement<Redirect> = <Redirect to={protectedRootPath} />;
  const RouteComponent: SFC<any> = isAuthorized ? component : redirect;
  const renderComponent: SFC<any> = (renderProps: RouteProps) => (
    <RouteComponent
      {...renderProps}
      nested={nested}
    />
  )

  return (
    <Route
      {...props}
      component={renderComponent}
    />
  );
};

export default ProtectedRoute;
