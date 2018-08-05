import { IAction, IRouterState, IRouteState } from '@interfaces';
import { createReducer } from '@utils';
import { ROUTER_SET_STATE } from './types';

interface IState {
  readonly from: IRouteState | null;
  readonly current: IRouteState | null;
};

const initialState: IState = {
  from: null,
  current: null,
};

export default createReducer<IState>(initialState, {
  [ROUTER_SET_STATE](state, action: IAction<IRouterState>) {
    return action.payload;
  },
});
