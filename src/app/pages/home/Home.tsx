import { Header } from '@share';
import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';
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
    <div className="home">
      <Header />
      <p>
        <Link to="/home">home</Link>
        <Link to="/test">test</Link>
      </p>
      <p className="home__intro">
        {props.nested}
      </p>
    </div>
  );
}

export default Home;
