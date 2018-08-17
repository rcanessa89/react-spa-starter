import { IFetchDataPayload } from '@interfaces';
import { actionCreator } from '@utils';
import {
  FETCH_DATA,
  FETCH_DATA_CANCEL,
  FETCH_DATA_COMPLETED
} from './types';

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

export type FetchAction = IFetchData | IFetchDataCompleted | IFetchCancel;

export const fetchData = actionCreator<IFetchData, IFetchDataPayload>(FETCH_DATA);
export const fetchDataCompleted = actionCreator<IFetchDataCompleted>(FETCH_DATA_COMPLETED);
export const fetchDataCancel = actionCreator<IFetchDataCompleted>(FETCH_DATA_CANCEL);
