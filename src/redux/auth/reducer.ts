import { IAction, IUser } from '@interfaces';
import { createReducer } from '@utils';
import {
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

interface IState {
  readonly message: string;
  readonly user: IUser | null;
}

const initialState: IState = {
  message: '',
  user: null,
};

export default createReducer<IState>(initialState, {
  [AUTH_REQUEST_SUCCESS](state, action: IAction<IUser>) {
    return {
      message: 'Authentication success',
      user: action.payload,
    };
  },
  [AUTH_REQUEST_FAILED](state, action: IAction<string>) {
    return {
      message: action.payload,
      user: null,
    };
  },
});
