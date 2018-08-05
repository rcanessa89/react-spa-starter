import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import logo from '../../../logo.svg';
import './home.css';

import store from '@store';

import { fetchData } from '@actions/fetch';

import { authRequestFailed, authRequestSuccess } from '@actions/auth';

import { Link } from 'react-router-dom'

interface ITest extends LoadingComponentProps {
  nested: any;
};

const Home: React.SFC<ITest> = (props) => {
  store.dispatch(fetchData({
    failed: authRequestFailed,
    options: {
      method: 'GET',
      url: 'users/2',
    },
    success: authRequestSuccess,
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>
        <Link to="/home">home</Link>
        <Link to="/test">test</Link>
      </p>
      <p className="App-intro">
      {props.nested}
      </p>

    </div>
  );
}

export default Home;
