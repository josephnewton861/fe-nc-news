import React, { Component } from "react";
import axios from "axios";

class CommentVoter extends Component {
  state = {
    voteDifference: 0,
  };
  render() {
    const { id, votes } = this.props;
    console.log(id);
    console.log(votes);
    return (
      <div>
        <button onClick={() => this.handlesVotes(1)}>Increase votes</button>
        <h4>Current votes: {this.props.votes + this.state.voteDifference}</h4>
        <button onClick={() => this.handlesVotes(-1)}>Decrease votes</button>
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
      .then(() => {
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