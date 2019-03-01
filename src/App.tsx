import store from '@store';
import * as React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/app-router';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
