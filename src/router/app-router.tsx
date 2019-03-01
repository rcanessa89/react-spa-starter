import { pushStateLocationPlugin, UIView } from '@uirouter/react';
import { ConnectedUIRouter } from '@uirouter/redux/lib/react';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ReactReduxContext } from 'react-redux';
import config from './config';
import { router } from './index';
import states from './states';

const plugins = [
  pushStateLocationPlugin
];

const statesArray = Object.keys(states).map(k => states[k]);

export default class AppRouter extends React.PureComponent {
  public static contextType = ReactReduxContext;
  public static childContextTypes = {
    store: PropTypes.object
  };

  public getChildContext() {
    return {
      store: this.context.store,
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
