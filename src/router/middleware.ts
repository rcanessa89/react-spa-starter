import { ROUTER_CHANGE } from '@containers/router/types';
import history from './history';

export default () => (next: any) => (action: any) => {
  if (action.type !== ROUTER_CHANGE) {
    return next(action);
  }

  history.push(action.payload);
};
