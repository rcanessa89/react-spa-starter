import * as React from 'react';
import './test.css';

interface IXx {
  nested: React.ReactElement<any>
}

export default class Test extends React.Component<IXx> {
  public render() {
    console.log(this.props);

    return (
      <div>
        <header>Test</header>
        {this.props.nested}
      </div>
    );
  }
}
