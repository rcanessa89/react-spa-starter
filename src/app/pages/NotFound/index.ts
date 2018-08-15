import  * as Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./not-found'),
  loading: () => null,
});
