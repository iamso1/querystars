import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [
        {
          repoName: 'zeit/next.js',
          url: 'http://www.json-generator.com/api/json/get/bUhOtXwCMi?indent=2',
        },
        {
          repoName: 'mosluce/realtime-chat-practice',
          url: 'http://www.json-generator.com/api/json/get/cfUwqOrsde?indent=2',
        },
      ],
      currentRepoName: '',
      stars: 0,
    };
  }

  componentWillReceiveProps = () => {
    console.log(`receive ${this.props.url}`);
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({ stars: res.stargazers_count }));
  };

  componentDidMount = () => {
    console.log(`didmount ${this.props.url}`);
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({ stars: res.stargazers_count }));
  };

  genRepos = repoObj => {
    return (
      <li>
        {repoObj.repoName}
        <button
          onClick={() => {
            this.props.queryStars(repoObj);
          }}
        >
          Query
        </button>
      </li>
    );
  };

  render() {
    const repos = this.state.repos.map(this.genRepos);
    return (
      <div>
        <div>{repos}</div>
        <p>
          {this.props.currentRepoName} has {this.props.stars} ⭐️
        </p>
      </div>
    );
  }
}
// List.defaultProps = {
//   url: 'https://api.github.com/repos/zeit/next.js',
// };
