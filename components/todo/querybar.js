import React, { Component } from 'react';

export default class Querybar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryStr: '',
    };
  }

  onQueryChange = e => {
    this.setState({ queryStr: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Live Query </p>
        <input
          type="text"
          value={this.state.queryStr}
          onChange={this.onQueryChange}
        />
        <button
          onClick={() => this.props.onChangeQueryStr(this.state.queryStr)}
        >
          Query
        </button>
      </div>
    );
  }
}
