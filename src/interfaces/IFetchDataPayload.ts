import IAction from './IAction';

type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface IFetchDataPayloadOptions {
  body?: object;
  method: method;
  url: string;
};

export default interface IFetchDataPayload {
  failed: (payload?: any) => IAction;
  options: IFetchDataPayloadOptions;
  success: (payload?: any) => IAction;
};
