import { paths } from '@router';
import * as React from 'react';
import { SFC } from 'react';

import { Redirect, Route } from 'react-router-dom';

interface IProtectedRouteProps {
  component: any;
  isAuthorized: boolean;
};

const ProtectedRoute: SFC<IProtectedRouteProps> = ({
  component,
  isAuthorized,
  ...props
}) => {
  const protectedRootPath: string = paths.root;
  const redirect: SFC<any> = () => <Redirect to={protectedRootPath} />;
  const renderComponent: SFC<any>  = isAuthorized ? component : redirect;

  return (
    <Route
      {...props}
      component={renderComponent}
    />
  );
};

export default ProtectedRoute;
