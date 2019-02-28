import { IRouterState } from '@interfaces';
import * as React from 'react';

export default (options: IRouterState): IRouterState => {
  const defaultOptions = {
    data: {
      public: false,
    },
    fallback: null,
  };
  const fullOptions = {
    ...defaultOptions,
    ...options,
  };
  const Component = options.component;
  const StateComponent: React.SFC = () => (
    <React.Suspense fallback={fullOptions.fallback}>
      <Component />
    </React.Suspense>
  );

  return {
    ...fullOptions,
    component: StateComponent,
  };
};
