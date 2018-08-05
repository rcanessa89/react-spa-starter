import { IAction, IRouterState, IRouteState } from '@interfaces';
import { createReducer } from '@utils';
import { ROUTER_SET_STATE } from './types';

interface IState {
  readonly current: IRouteState | null;
  readonly from: IRouteState | null;
};

const initialState: IState = {
  current: null,
  from: null,
};

export default createReducer<IState>(initialState, {
  [ROUTER_SET_STATE](state, action: IAction<IRouterState>) {
    return action.payload;
  },
});
