import React, { Component } from 'react';
import Repolist from './repolist';
import Querybar from './querybar';
import Addrepoinfo from './addrepoinfo';

import axios from 'axios';

export default class Querystar extends Component {
  repos = [
    {
      repoName: 'zeit/next.js',
      url: 'https://api.github.com/repos/zeit/next.js',
    },
    {
      repoName: 'mosluce/realtime-chat-practice',
      url: 'https://api.github.com/repos/mosluce/realtime-chat-practice',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      url: this.repos[0].url,
      currentRepoName: this.repos[0].repoName,
      repos: this.repos,
    };
  }

  onChangeQueryStr = queryStr => {
    this.setState({
      url: `https://api.github.com/repos/${queryStr}`,
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

  addRepo = repoInfo => {
    const currentRepo = this.state.repos;
    currentRepo.push(repoInfo);
    this.setState({ repos: currentRepo });
  };

  render() {
    return (
      <div>
        <Repolist
          url={this.state.url}
          currentRepoName={this.state.currentRepoName}
          stars={this.state.stars}
          repos={this.state.repos}
          queryStars={this.queryStars}
          addRepo={this.addRepo}
        />
        <Addrepoinfo addRepo={this.addRepo} />
        <hr />
        <Querybar onChangeQueryStr={this.onChangeQueryStr} />
      </div>
    );
  }
}

//'http://www.json-generator.com/api/json/get/bUhOtXwCMi?indent=2'
//'http://www.json-generator.com/api/json/get/cfUwqOrsde?indent=2'
