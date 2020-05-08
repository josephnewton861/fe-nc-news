import React, { Component } from "react";
import axios from "axios";
// import { Link } from "@reach/router";

class AddCommentByArticleId extends Component {
  state = {
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
    const { username } = this.props;
    console.log("submitted", this.state);
    const { body } = this.state;
    const { article_id } = this.props;
    axios
      .post(
        `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        {
          username: username,
          body: body,
        }
      )
      .then(({ data }) => {
        console.log(this.props);
        this.props.addComment(data.comment);
        this.setState({
          body: "",
        });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handlesCommentSubmission}>
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
        <button className="submit btn btn-info">Submit new comment</button>
      </form>
    );
  }
}

export default AddCommentByArticleId;
