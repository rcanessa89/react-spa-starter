import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthAction, authRequestFailed, authRequestSuccess, IAuthRequest } from './actions';
import { AUTH_REQUEST } from './types';

const authEpic: Epic<IAuthRequest, AuthAction> = (action$, state$) => action$.pipe(
  ofType(AUTH_REQUEST),
  mergeMap((action: IAuthRequest) =>
    ajax('https://reqres.in/api/users/2')
      .pipe(
        map((xhr: AjaxResponse) => authRequestSuccess(xhr.response.data)),
        catchError((error: Error) => of(authRequestFailed(error.message)))
      )
  )
);

export default [
  authEpic,
];
