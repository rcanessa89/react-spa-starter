import { RouteProps } from 'react-router-dom';

export default interface IAppRoute extends RouteProps {
  public?: boolean;
  nested?: IAppRoute[];
};
