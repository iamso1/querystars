import React, { Component } from 'react';
import Addrepoinfo from './addrepoinfo';

export default class Repolist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.url);
    console.log(nextProps.url);
    if (this.state.currentRepoName != nextProps.currentRepoName) {
      console.log('redraw');
      fetch(nextProps.url)
        .then(res => res.json())
        .then(res =>
          this.setState({
            currentRepoName: this.props.currentRepoName,
            stars: res.stargazers_count,
          })
        );
    }
  }

  componentDidMount() {
    console.log(`didmount ${this.props.url}`);
    fetch(this.props.url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          currentRepoName: this.props.currentRepoName,
          stars: res.stargazers_count,
        })
      );
  }

  queryStars = repoObj => {
    fetch(repoObj.url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          currentRepoName: repoObj.repoName,
          stars: res.stargazers_count,
        })
      );
  };

  genRepos = (repoObj, index) => {
    return (
      <li key={index}>
        {repoObj.repoName}
        <button
          onClick={() => {
            this.queryStars(repoObj);
          }}
        >
          Query
        </button>
      </li>
    );
  };

  render() {
    const repos = this.props.repos.map(this.genRepos);
    return (
      <div>
        <p>
          you are now watching {this.state.currentRepoName} has{' '}
          {this.state.stars} ⭐️
        </p>
        <div>{repos}</div>
        <Addrepoinfo addRepo={this.props.addRepo} />
      </div>
    );
  }
}
// Repolist.defaultProps = {
//   url: 'https://api.github.com/repos/zeit/next.js',
// };
