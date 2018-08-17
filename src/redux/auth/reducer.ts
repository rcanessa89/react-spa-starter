import { IAction, IUser } from '@interfaces';
import { createReducer } from '@utils';
import {
  AUTH_OFF,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

interface IState {
  readonly isAuthorized: boolean;
  readonly message: string;
  readonly user: IUser | null;
}

const initialState: IState = {
  isAuthorized: false,
  message: '',
  user: null,
};

export default createReducer<IState>(initialState, {
  [AUTH_REQUEST_SUCCESS](state, action: IAction<IUser>) {
    return {
      isAuthorized: true,
      message: 'Authentication success',
      user: action.payload,
    };
  },
  [AUTH_REQUEST_FAILED](state, action: IAction<string>) {
    return {
      isAuthorized: false,
      message: action.payload,
      user: null,
    };
  },
  [AUTH_OFF]() {
    return initialState;
  },
});
