import React, { Component } from "react";
// import axios from "axios";
import * as api from "../utils/api";

class CommentVoter extends Component {
  state = {
    voteDifference: 0,
  };
  render() {
    const { voteDifference } = this.state;
    // console.log(this.props.type);
    // const { id, votes } = this.props;
    // console.log(id);
    // console.log(votes);
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
  handlesVotes = (voteChange) => {
    const { type } = this.props;
    const { id } = this.props;
    console.log("clicked");
    api.updateVotes(type, id, voteChange);
    this.setState((currentState) => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
    // return axios
    //   .patch(`https://joseph-nc-news.herokuapp.com/api/${type}/${id}`, {
    //     inc_votes: voteChange,
    //   })
    //   .catch(() => {
    //     this.setState((currentState) => {
    //       return { voteDifference: currentState.voteDifference - voteChange };
    //     });
    //   })
    //   .catch((err) => {
    //     console.dir(err);
    //   });
  };
}

export default CommentVoter;
