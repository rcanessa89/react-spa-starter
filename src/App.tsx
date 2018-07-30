import * as React from 'react';
import './App.css';

import { AppRouter } from '@router';

class App extends React.Component {
  public render() {
    return <AppRouter isAuthorized={true} />;
  }
}

export default App;
