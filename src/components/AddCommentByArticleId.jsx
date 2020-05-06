import React, { Component } from "react";
import axios from "axios";
// import { Link } from "@reach/router";

class AddCommentByArticleId extends Component {
  state = {
    author: "",
    body: "",
  };
  handlesChange = (event) => {
    // console.log(event.target.value);

    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handlesCommentSubmission = (event) => {
    event.preventDefault();
    console.log("submitted", this.state);
    const { body, author } = this.state;
    const { article_id } = this.props;

    // console.log(article_id);

    console.log(author);
    axios
      .post(
        `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        {
          username: author,
          body: body,
        }
      )
      .then(({ data }) => {
        // console.log(this.props.addComment);
        // this.props.addComment(data.comment);
        this.setState({
          author: "",
          body: "",
        });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    // console.log(this.state.author);
    const { author, body } = this.state;
    return (
      <form onSubmit={this.handlesCommentSubmission}>
        <label className="author">
          Author:
          <input
            name="author"
            onChange={this.handlesChange}
            type="text"
            value={author}
            required
          />
        </label>
        <label className="AddedComment">
          Add new comment:
          <input
            name="body"
            onChange={this.handlesChange}
            type="text"
            value={body}
            required="Comment cannot be left blank"
          />
        </label>
        <button className="btn btn-info">Submit new comment</button>
      </form>
    );
  }
}

export default AddCommentByArticleId;
