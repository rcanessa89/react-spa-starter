import store from '@store';
import { pushStateLocationPlugin, UIView } from '@uirouter/react';
import { ConnectedUIRouter } from '@uirouter/redux/lib/react';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import config from './config';
import { router } from './index';
import states from './states';

const plugins = [
  pushStateLocationPlugin
];

const statesArray = Object.keys(states).map(k => states[k]);

export default class AppRouter extends React.Component<any> {
  public static childContextTypes = {
    store: PropTypes.object
  };

  public getChildContext() {
    return {
      store,
    };
  }

  public render() {
    return (
      <ConnectedUIRouter
        router={router}
        plugins={plugins}
        states={statesArray}
        config={config}
      >
        <UIView />
      </ConnectedUIRouter>
    );
  }
}
