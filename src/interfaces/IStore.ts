import IAuth from './IAuth';
import IRouterState from './IRouterState';

export default interface IStore {
  auth: IAuth;
  router: IRouterState;
};
