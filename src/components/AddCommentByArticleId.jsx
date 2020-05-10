import React, { Component } from "react";
// import axios from "axios";
import * as api from "../utils/api";
// import { Link } from "@reach/router";

class AddCommentByArticleId extends Component {
  state = {
    body: "",
  };
  handlesChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handlesCommentSubmission = async (event) => {
    try {
      event.preventDefault();
      const { username } = this.props;
      const { body } = this.state;
      const { article_id } = this.props;
      const newComment = await api.postComment(article_id, {
        username: username,
        body: body,
      });
      this.props.addComment(newComment);
      this.setState({
        body: "",
      });
    } catch (err) {
      console.dir(err);
    }
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handlesCommentSubmission}>
        <label className="AddedComment">
          Add a new comment:
          <input
            className="input"
            name="body"
            onChange={this.handlesChange}
            type="text"
            value={body}
            required="Comment cannot be left blank"
          />
        </label>
        <button className="submit btn btn-info">Submit new comment</button>
      </form>
    );
  }
}

export default AddCommentByArticleId;
