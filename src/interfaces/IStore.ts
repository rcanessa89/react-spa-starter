import { IAuthState } from '@containers/auth/interfaces';
import IFetch from './IFetch';
import IRouterState from './IRouterState';

export default interface IStore {
  auth: IAuthState;
  fetch: IFetch;
  router: IRouterState;
};
