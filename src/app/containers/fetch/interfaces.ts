import { IAction } from '@interfaces';
import { AjaxRequest } from 'rxjs/ajax';
import {
  FETCH_DATA,
  FETCH_DATA_CANCEL,
  FETCH_DATA_COMPLETED
} from './types';

export type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface IFetchDataPayloadOptions {
  body?: object;
  method: method;
  url: string;
};

export interface IFetchData {
  type: FETCH_DATA;
  payload: IFetchDataPayload;
};

export interface IFetchDataCompleted {
  type: FETCH_DATA_COMPLETED;
  payload: any;
};

export interface IFetchCancel {
  type: FETCH_DATA_CANCEL;
};

export interface IFetchDataPayload {
  failed: (payload?: any) => IAction;
  options: IFetchDataPayloadOptions;
  success: (payload?: any) => IAction;
};

export interface IFetchState {
  loading: boolean;
  request: AjaxRequest | null,
};

export interface IFetchDispatch {
  fetchData: (payload: IFetchDataPayload) => {};
  fetchDataCancel: () => {};
}
