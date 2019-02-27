import { Api } from '@services';
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { authRequestFailed, authRequestSuccess } from './actions';
import { IAuthRequest } from './interfaces';
import { AUTH_REQUEST } from './types';

const authEpic = (action$: Observable<IAuthRequest>) => action$.pipe(
  ofType(AUTH_REQUEST),
  mergeMap((action: IAuthRequest) => {
    const api = new Api();

    return api.call('/login', 'POST', action.payload)
      .pipe(
        map((xhr: AjaxResponse) => authRequestSuccess(xhr.response)),
        catchError((error: AjaxError) => of(authRequestFailed(error.message)))
      );
  })
);

export default [
  authEpic
];
