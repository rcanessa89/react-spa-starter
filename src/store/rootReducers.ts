import authReducer from '@redux/auth/reducer';
import fetchReducer from '@redux/fetch/reducer';
import routerReducer from '@redux/router/reducer';

export default {
  auth: authReducer,
  fetch: fetchReducer,
  router: routerReducer,
};
