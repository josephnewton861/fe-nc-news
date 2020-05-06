import React, { Component } from "react";
import axios from "axios";

class CommentVoter extends Component {
  state = {
    voteDifference: 0,
  };
  render() {
    const { voteDifference } = this.state;
    // const { id, votes } = this.props;
    // console.log(id);
    // console.log(votes);
    return (
      <div>
        <button
          className="btn btn-info"
          onClick={() => this.handlesVotes(1)}
          disabled={voteDifference === 1}
        >
          Increase votes
        </button>
        <h4>Current votes: {this.props.votes + this.state.voteDifference}</h4>
        <button
          className="btn btn-info"
          onClick={() => this.handlesVotes(-1)}
          disabled={voteDifference === -1}
        >
          Decrease votes
        </button>
      </div>
    );
  }
  handlesVotes = (voteChange) => {
    console.log("clicked");
    this.setState((currentState) => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
    return axios
      .patch(
        `https://joseph-nc-news.herokuapp.com/api/comments/${this.props.id}`,
        {
          inc_votes: voteChange,
        }
      )
      .catch(() => {
        this.setState((currentState) => {
          return { voteDifference: currentState.voteDifference - voteChange };
        });
      })
      .catch((err) => {
        console.dir(err);
      });
  };
}

export default CommentVoter;
