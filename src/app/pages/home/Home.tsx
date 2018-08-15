import { Header } from '@share';
import * as React from 'react';
import './home.css';

interface IProps {
  nested: any;
};

const Home: React.SFC<IProps> = ({
  nested
}) => (
  <div className="home">
    <Header />
    <p className="home__intro">
      {nested}
    </p>
  </div>
);

export default Home;
