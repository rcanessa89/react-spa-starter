import { IAuthState } from '@containers/auth/interfaces';
import { IFetchState } from '@containers/fetch/interfaces';

export default interface IStore {
  auth: IAuthState;
  fetch: IFetchState;
};
