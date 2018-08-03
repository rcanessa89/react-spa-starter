import { IAction } from '@interfaces';
import { createReducer } from '@utils';
import { AjaxRequest } from 'rxjs/ajax';
import {
  FETCH_DATA,
  FETCH_DATA_CANCEL,
  FETCH_DATA_COMPLETED
} from './types';

interface IState {
  readonly loading: boolean;
  readonly request: AjaxRequest | null,
};

const initialState: IState = {
  loading: false,
  request: null,
};

export default createReducer<IState>(initialState, {
  [FETCH_DATA](state: IState, action: IAction<AjaxRequest>) {
    return {
      loading: true,
      request: action.payload,
    };
  },
  [FETCH_DATA_COMPLETED]() {
    return {
      loading: false,
      request: null,
    };
  },
  [FETCH_DATA_CANCEL]() {
    return {
      loading: false,
      request: null,
    };
  }
});
