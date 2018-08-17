import IRouteState from './IRouteState';

export default interface IRouterState {
  from: IRouteState | null;
  current: IRouteState;
};
