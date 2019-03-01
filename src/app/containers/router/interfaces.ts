export interface IRouterState {
  transitioning: boolean;
  last: any;
};

export interface IRouterDispatch {
  triggerTransition: (to: string, params: any) => {};
}
