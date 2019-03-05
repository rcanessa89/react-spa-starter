import * as React from 'react';
import { Router, View } from 'react-navi';
import history from './history';
import routes from './routes';

const AppRouter = () => (
  <Router routes={routes} history={history}>
    <React.Suspense fallback={null}>
      <View />
    </React.Suspense>
  </Router>
);

export default AppRouter;
