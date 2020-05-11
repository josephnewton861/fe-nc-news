import React, { Component } from "react";
import * as api from "../utils/api";

class CommentVoter extends Component {
  state = {
    voteDifference: 0,
  };
  render() {
    const { voteDifference } = this.state;
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.handlesVotes(1)}
          disabled={voteDifference === 1}
        >
          Increase votes
        </button>
        <h4>Current votes: {this.props.votes + this.state.voteDifference}</h4>
        <button
          className="btn btn-primary"
          onClick={() => this.handlesVotes(-1)}
          disabled={voteDifference === -1}
        >
          Decrease votes
        </button>
      </div>
    );
  }
  handlesVotes = async (voteChange) => {
    const { type } = this.props;
    const { id } = this.props;
    this.setState((currentState) => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
    try {
      await api.updateVotes(type, id, voteChange);
    } catch (err) {
      console.dir(err);
    }
  };
}

export default CommentVoter;
