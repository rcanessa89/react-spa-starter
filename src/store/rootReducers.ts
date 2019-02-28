import authReducer from '@containers/auth/reducer';
import fetchReducer from '@containers/fetch/reducer';
import { routerReducer } from '@uirouter/redux';

export default {
  auth: authReducer,
  fetch: fetchReducer,
  router: routerReducer,
};
