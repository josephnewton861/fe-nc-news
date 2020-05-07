import React, { Component } from "react";
import axios from "axios";

class ArticleVoter extends Component {
  state = {
    voteChange: 0,
  };
  render() {
    const { voteChange } = this.state;
    // console.log(isDisabled);
    // console.log(this.props.votes);
    // console.log(this.props.id);
    return (
      <div>
        <button
          className="btn btn-primary size-xs"
          onClick={() => this.handlesVotes(1)}
          disabled={voteChange === 1}
        >
          Increase vote
        </button>
        <h4>Current votes: {this.props.votes + this.state.voteChange}</h4>
        <button
          className="btn btn-primary"
          onClick={() => this.handlesVotes(-1)}
          disabled={voteChange === -1}
        >
          Decrease vote
        </button>
      </div>
    );
  }

  handlesVotes = (voteNum) => {
    console.log("clicked");
    this.setState((currentState) => {
      return {
        voteChange: currentState.voteChange + voteNum,
      };
    });
    axios
      .patch(
        `https://joseph-nc-news.herokuapp.com/api/articles/${this.props.id}`,
        { inc_votes: voteNum }
      )
      .catch((err) => {
        this.setState((currentState) => {
          return {
            voteChange: currentState.voteChange - voteNum,
          };
        });
      });
  };
}

export default ArticleVoter;
