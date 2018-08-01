
import { IUser } from '@interfaces';
import { actionCreator } from '@utils';
import {
  AUTH_REQUEST,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

export interface IAuthRequest {
  type: AUTH_REQUEST;
};

export interface IAuthRequestSuccess {
  type: AUTH_REQUEST_SUCCESS;
  payload: IUser;
};

export interface IAuthRequestFailed {
  type: AUTH_REQUEST_FAILED;
  payload: string;
};

export type AuthAction = IAuthRequest | IAuthRequestSuccess | IAuthRequestFailed;

export const authRequest = actionCreator<IAuthRequest>(AUTH_REQUEST);
export const authRequestSuccess = actionCreator<IAuthRequestSuccess, IUser>(AUTH_REQUEST_SUCCESS);
export const authRequestFailed = actionCreator<IAuthRequestFailed, string>(AUTH_REQUEST_FAILED);
