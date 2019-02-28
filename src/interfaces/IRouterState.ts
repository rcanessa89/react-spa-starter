import { ReactStateDeclaration } from '@uirouter/react';
import {
  ClassicComponentClass,
  ComponentClass,
  ReactNode,
  StatelessComponent
} from 'react';

export default interface IRouterState extends ReactStateDeclaration {
  component: StatelessComponent<any> | ComponentClass<any> | ClassicComponentClass<any>;
  fallback?: NonNullable<ReactNode> | null;
  name: string;
}
