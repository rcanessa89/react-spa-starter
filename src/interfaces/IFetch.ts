import { AjaxRequest } from 'rxjs/ajax';

export default interface IFetch {
  loading: boolean;
  request: AjaxRequest | null;
};
