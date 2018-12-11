import { IRouteComponentProps } from '@interfaces';
import { paths } from '@router';
import * as React from 'react';
import { SFC } from 'react';
import {
  Redirect,
  Route,
  RouteProps,
} from 'react-router-dom';
import { isNotFound } from '../utils';

const PublicRoute: SFC<IRouteComponentProps> = ({
  component: Component,
  ...props
}) => {
  const {
    isAuthorized,
    nested,
  } = props;

  const renderComponent: SFC<any> = (renderProps: RouteProps) => {
    if (isNotFound(props as IRouteComponentProps, renderProps)) {
      return <Redirect to={paths.noMatch} />;
    }

    if (isAuthorized) {
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

export default PublicRoute;
