import { RouteProps } from 'react-router-dom';

export interface IAppRouteProps extends RouteProps {
  isAuthorized: boolean;
};

export interface IAppRoute extends RouteProps {
  public?: boolean;
};
