import React, { Component } from 'react';
import List from './list';
import Querybar from './querybar';

import axios from 'axios';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      queryStr: '',
      currentRepoName: '',
    };
  }

  onChangeQueryStr = queryStr => {
    this.setState({
      queryStr: `https://api.github.com/repos/${queryStr}`,
      currentRepoName: queryStr,
    });
  };

  queryStars = repoObj => {
    axios.get(repoObj.url).then(res => {
      this.setState({
        currentRepoName: repoObj.repoName,
        stars: res.data.stargazers_count,
      });
    });
  };

  render() {
    return (
      <div>
        <p> you are now watching {this.state.currentRepoName}</p>
        <List
          url={this.state.queryStr}
          currentRepoName={this.state.currentRepoName}
          stars={this.state.stars}
          queryStars={this.queryStars}
        />
        <hr />
        <Querybar onChangeQueryStr={this.onChangeQueryStr} />
      </div>
    );
  }
}
