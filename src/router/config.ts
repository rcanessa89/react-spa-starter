import { IStore } from '@interfaces';
import store from '@store';
import { TargetState, Transition, UIRouterReact } from '@uirouter/react';
import states from './states';

// UI Router React Configurtion
export default (router: UIRouterReact) => {
  // Otherwhise state when the url not match with any url state
  router.urlRouter.otherwise({ state: states.notFound.name });

  // This function runs before every route state
  router.transitionService.onBefore({}, (trans: Transition) => {
    const authValidation = validateAuth(trans);

    if (authValidation !== null) {
      return authValidation;
    }

    return true;
  });
};

// Validate the current user uthetication state
function validateAuth(trans: Transition): TargetState | null {
  const state: IStore = store.getState();
  const isAuthorized = state.auth.isAuthorized;
  const toRouteState = trans.to();
  const data = toRouteState.data;
  const isPublic = data ? !!data.public : false;

  if (isPublic && isAuthorized && toRouteState.name !== states.notFound.name) {
    return trans.router.stateService.target(states.home.name);
  } else if (!isPublic && !isAuthorized && toRouteState.name !== states.notFound.name) {
    return trans.router.stateService.target(states.login.name);
  }

  return null;
}
