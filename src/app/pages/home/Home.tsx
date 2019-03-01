import { Header } from '@share';
import * as React from 'react';
import './home.css';

const Home: React.SFC = (props: any) => {
  console.log(props);

  return (
    <div className="home">
      <Header />
      <div>
        <h1 className="home__title">Home</h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus alias quidem asperiores consequatur omnis, id facilis veritatis ut laborum? Ipsum est totam eaque optio, harum amet minus libero error!</p>
      </div>
      <div>
        <button onClick={props.logout}>LogOut</button>
      </div>
    </div>
  )
};

export default Home;
