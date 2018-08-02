import { Action, Location } from 'history';

export default interface IRouteState {
  action: Action;
  location: Location;
};
