import React, { Component } from "react";
import axios from "axios";

class Voter extends Component {
  state = {
    voteChange: 0,
  };
  render() {
    // console.log(this.props.votes);
    // console.log(this.props.id);
    return (
      <div>
        <button onClick={() => this.handlesVotes(1)}>Increase vote</button>
        <p>Current votes {this.props.votes + this.state.voteChange}</p>
        <button onClick={() => this.handlesVotes(-1)}>Decrease vote</button>
      </div>
    );
  }

  handlesVotes = (voteNum) => {
    console.log("clicked");
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + voteNum };
    });
    axios
      .patch(
        `https://joseph-nc-news.herokuapp.com/api/articles/${this.props.id}`,
        { inc_votes: voteNum }
      )
      .then(() => {
        this.setState((currentState) => {
          return { voteChange: currentState.voteChange - voteNum };
        });
      });
  };
}

export default Voter;
