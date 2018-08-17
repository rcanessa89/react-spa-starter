import IAuth from './IAuth';
import IFetch from './IFetch';
import IRouterState from './IRouterState';

export default interface IStore {
  auth: IAuth;
  fetch: IFetch;
  router: IRouterState;
};
