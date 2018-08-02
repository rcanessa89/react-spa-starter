import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import logo from '../../../logo.svg';
import './Home.css';

import store from '@store';

import { authRequest } from '@actions/auth';

interface ITest extends LoadingComponentProps {
  nested: any;
};

const Home: React.SFC<ITest> = (props) => {
  store.dispatch(authRequest());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      {props.nested}
      </p>

    </div>
  );
}

export default Home;
