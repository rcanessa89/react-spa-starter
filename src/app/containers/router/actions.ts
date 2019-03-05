import { actionCreator } from '@utils';
import { IRouterChange } from './interfaces';
import {
  ROUTER_CHANGE
} from './types';

export type RouterAction = IRouterChange;

export const routerChange = actionCreator<IRouterChange, string>(ROUTER_CHANGE);
