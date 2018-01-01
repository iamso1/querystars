import React, { Component } from 'react';

export default class Addrepoinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repoName: 'enter repoName here',
      repoUrl: 'enter repo url here',
    };
  }

  onRepoNameChange = e => {
    // const repoInfo = this.state.repoInfo;
    // repoInfo.repoName = e.target.value;
    this.setState({ repoName: e.target.value });
  };

  onRepoRepoUrlChange = e => {
    // const repoInfo = this.state.repoInfo;
    // repoInfo.repoUrl = e.target.value;
    this.setState({ repoUrl: e.target.value });
  };

  render() {
    return (
      <div>
        <p>
          <label>repoName: </label>
          <input
            type="text"
            value={this.state.repoName}
            onChange={this.onRepoNameChange}
          />
          <label>repoUrl:</label>
          <input
            type="text"
            value={this.state.repoUrl}
            onChange={this.onRepoRepoUrlChange}
          />
          <button
            onClick={() => {
              this.props.addRepo({
                repoName: this.state.repoName,
                repoUrl: this.state.repoUrl,
              });
            }}
          >
            Add Repo
          </button>
        </p>
      </div>
    );
  }
}
