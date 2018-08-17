import { IUser } from '@interfaces';
import { actionCreator } from '@utils';
import {
  AUTH_OFF,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

export interface IAuthRequestSuccess {
  type: AUTH_REQUEST_SUCCESS;
  payload: IUser;
};

export interface IAuthRequestFailed {
  type: AUTH_REQUEST_FAILED;
  payload: string;
};

export interface IAuthOff {
  type: AUTH_OFF;
};

export type AuthAction = IAuthRequestSuccess | IAuthRequestFailed | IAuthOff;

export const authRequestSuccess = actionCreator<IAuthRequestSuccess, IUser>(AUTH_REQUEST_SUCCESS);
export const authRequestFailed = actionCreator<IAuthRequestFailed, string>(AUTH_REQUEST_FAILED);
export const authOff = actionCreator<IAuthOff>(AUTH_OFF);

export default {
  authOff,
  authRequestFailed,
  authRequestSuccess,
};
