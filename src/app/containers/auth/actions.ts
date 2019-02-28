import { IUser } from '@interfaces';
import { actionCreator } from '@utils';
import {
  IAuthCredentials,
  IAuthOff,
  IAuthRequest,
  IAuthRequestFailed,
  IAuthRequestSuccess
} from './interfaces';
import {
  AUTH_OFF,
  AUTH_REQUEST,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

export type AuthAction = IAuthRequest | IAuthRequestSuccess | IAuthRequestFailed | IAuthOff;

export const authRequest = actionCreator<IAuthRequest, IAuthCredentials>(AUTH_REQUEST);
export const authRequestSuccess = actionCreator<IAuthRequestSuccess, IUser>(AUTH_REQUEST_SUCCESS);
export const authRequestFailed = actionCreator<IAuthRequestFailed, string>(AUTH_REQUEST_FAILED);
export const authOff = actionCreator<IAuthOff>(AUTH_OFF);
