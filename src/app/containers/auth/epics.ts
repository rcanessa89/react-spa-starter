import { history, paths } from '@router';
import { Api } from '@services';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { routerChange } from '../router/actions';
import { authRequestFailed, authRequestSuccess } from './actions';
import { IAuthOff, IAuthRequest } from './interfaces';
import { AUTH_OFF, AUTH_REQUEST } from './types';

const authEpic: Epic = (
  action$: ActionsObservable<IAuthRequest>
) => action$.pipe(
  ofType(AUTH_REQUEST),
  mergeMap((action: IAuthRequest) => {
    const api = new Api();

    return api.call(Api.urls.login, Api.methods.post, action.payload)
      .pipe(
        map((xhr: AjaxResponse) => authRequestSuccess(xhr.response)),
        catchError((error: AjaxError) => of(authRequestFailed(error.message))),
        tap(undefined, undefined, () => {
          history.push(paths.home);
        })
      );
  })
);

const authOffEpic: Epic = (action$: ActionsObservable<IAuthOff>) => action$.pipe(
  ofType(AUTH_OFF),
  mergeMap(() => of(routerChange(paths.login)))
);

export default [
  authEpic,
  authOffEpic
];
