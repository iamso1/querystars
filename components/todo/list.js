import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3],
    };
  }

  genItem = value => {
    return <li>{value}</li>;
  };

  render() {
    const result = this.state.data.map(this.genItem);
    return <div>{result}</div>;
  }
}
