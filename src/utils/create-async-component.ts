import  * as Loadable from 'react-loadable';

type loadingFunc = React.ComponentType<Loadable.LoadingComponentProps> | (() => null);

export default (loader: () => Promise<any>, loading: loadingFunc = () => null) => Loadable({
  loader,
  loading,
});
