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
  component,
  isAuthorized,
  nested = null,
  ...props
}) => {
  const publicRootPath: string = paths.root;
  const redirect: React.ReactElement<Redirect> = <Redirect to={publicRootPath} />;
  const RouteComponent: SFC<any> = isAuthorized ? redirect : component;
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

export default PublicRoute;
