import { pushStateLocationPlugin, UIView } from '@uirouter/react';
import { ConnectedUIRouter } from '@uirouter/redux/lib/react';
import * as React from 'react';
import config from './config';
import { router } from './index';
import states from './states';

const plugins = [
  pushStateLocationPlugin
];

const statesArray = Object.keys(states).map(k => states[k]);

export default (
  <ConnectedUIRouter
    router={router}
    plugins={plugins}
    states={statesArray}
    config={config}
  >
    <UIView />
  </ConnectedUIRouter>
);
