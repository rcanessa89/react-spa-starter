import { IAuthState } from '@containers/auth/interfaces';
// import IFetch from './IFetch';

export default interface IStore {
  auth: IAuthState;
  fetch: any;
};
