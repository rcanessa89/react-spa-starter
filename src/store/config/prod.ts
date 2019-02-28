import { IStore } from '@interfaces';
import { router } from '@router';
import { createRouterMiddleware } from '@uirouter/redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Reducer,
  Store
} from 'redux';
import {
  combineEpics,
  createEpicMiddleware,
  EpicMiddleware
} from 'redux-observable';
import rootEpic from '../rootEpics';
import rootReducer from '../rootReducers';

export default (): Store<IStore> => {
  const routerMiddleware = createRouterMiddleware(router);
  const epicMiddleware: EpicMiddleware<any> = createEpicMiddleware();
  const reducers: Reducer = combineReducers(rootReducer);
  const middlewares = applyMiddleware(routerMiddleware, epicMiddleware);
  const store: Store = createStore(reducers, middlewares);

  epicMiddleware.run(combineEpics(...rootEpic));

  return store;
};
