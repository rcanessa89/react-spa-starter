import * as React from 'react';
import { SFC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import paths from '../config/paths';

interface IPublicRouteProps {
  component: any;
  isAuthorized: boolean;
}

const PublicRoute: SFC<IPublicRouteProps> = ({
  component,
  isAuthorized,
  ...props
}) => {
  const publicRootPath: string = paths.root;
  const redirect: SFC<any> = () => <Redirect to={publicRootPath} />;
  const renderComponent: SFC<any>  = isAuthorized ? redirect : component;

  return (
    <Route
      {...props}
      component={renderComponent}
    />
  );
};

export default PublicRoute;
