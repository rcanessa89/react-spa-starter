import { IRouterState } from '@interfaces';
import { actionCreator } from '@utils';
import { ROUTER_SET_STATE } from './types';

export interface IRouterSetState {
  type: ROUTER_SET_STATE;
  payload: IRouterState;
};

export const routerSetState = actionCreator<IRouterSetState, IRouterState>(ROUTER_SET_STATE);
