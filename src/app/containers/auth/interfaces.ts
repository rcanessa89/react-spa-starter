import { IUser } from '@interfaces';
import {
  AUTH_OFF,
  AUTH_REQUEST,
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_SUCCESS
} from './types';

export interface IAuthCredentials {
  email: string;
  password: string;
};

export interface IAuthRequest {
  type: AUTH_REQUEST;
  payload: IAuthCredentials;
}

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

export interface IAuthState {
  isAuthorized: boolean;
  user: IUser | null;
}

export interface IAuthDispatch {
  login: (payload: IAuthCredentials) => {};
  logout: () => {};
}

export interface IAuthFormikValues {
  email: string;
  password: string;
}
