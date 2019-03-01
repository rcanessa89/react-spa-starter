import { IStore } from '@interfaces';
import { states } from '@router';
import { Api } from '@services';
import { triggerTransition } from '@uirouter/redux';
import { ActionsObservable, Epic, ofType, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { authRequestFailed, authRequestSuccess } from './actions';
import { IAuthOff, IAuthRequest } from './interfaces';
import { AUTH_OFF, AUTH_REQUEST } from './types';

const authEpic: Epic = (
  action$: ActionsObservable<IAuthRequest>,
  state$: StateObservable<IStore>
) => action$.pipe(
  ofType(AUTH_REQUEST),
  mergeMap((action: IAuthRequest) => {
    const api = new Api();

    return api.call(Api.urls.login, Api.methods.post, action.payload)
      .pipe(
        map((xhr: AjaxResponse) => authRequestSuccess(xhr.response)),
        catchError((error: AjaxError) => of(authRequestFailed(error.message))),
        tap(undefined, undefined, () => {
          state$.value.router.last.router.stateService.go(states.home.name);
        })
      );
  })
);

const authOffEpic: Epic = (action$: ActionsObservable<IAuthOff>) => action$.pipe(
  ofType(AUTH_OFF),
  mergeMap(() => of(triggerTransition(states.login.name, null)))
);

export default [
  authEpic,
  authOffEpic
];
