import { Api } from '@services';
import { Epic, ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, mergeMap, takeUntil } from 'rxjs/operators';
import { fetchDataCompleted, IFetchData } from './actions';
import { FETCH_DATA, FETCH_DATA_CANCEL } from './types';

const fetchEpic: Epic<IFetchData> = (action$, state$) => action$.pipe(
  ofType(FETCH_DATA),
  mergeMap((action: IFetchData) => {
    const api = new Api();

    return api.call(action.payload.options.url, action.payload.options.method)
      .pipe(
        mergeMap((xhr: AjaxResponse) => concat(
          of(fetchDataCompleted()),
          of(action.payload.success(xhr.response))
        )),
        takeUntil(action$.ofType(FETCH_DATA_CANCEL)),
        catchError((error: AjaxError) => of(action.payload.failed(error)))
      );
  })
);

export default [
  fetchEpic,
];
