import { AppRouter } from '@router';
import store from '@store';
import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppRouter isAuthorized={true} />
      </Provider>
    );
  }
}

export default App;
