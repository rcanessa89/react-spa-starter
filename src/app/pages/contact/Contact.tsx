import * as React from 'react';

export default (props: any) => {

  console.log(props);

  return <span>Contact  {props.nested} </span>
};
