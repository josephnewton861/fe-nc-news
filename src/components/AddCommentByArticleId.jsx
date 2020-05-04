import React, { Component } from "react";
import axios from "axios";

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

    axios
      .post(
        `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
        {
          author: author,
          body: body,
        }
      )
      .then(({ data }) => {
        this.props.addComment(data.comment);
      })
      .then(
        this.setState({
          author: "",
          body: "",
        })
      )
      .catch((err) => {
        console.dir(err);
      });
  };

  render() {
    // console.log(this.state.author);
    const { author, body } = this.state;
    return (
      <form onSubmit={this.handlesCommentSubmission}>
        <label>
          Author:
          <input
            name="author"
            onChange={this.handlesChange}
            type="text"
            value={author}
          />
        </label>
        <label>
          Add new comment:
          <input
            name="body"
            onChange={this.handlesChange}
            type="text"
            value={body}
          />
        </label>
        <button>Submit new comment</button>
      </form>
    );
  }
}

//state for author and for an added comment both as empty strings
// we need a this.handlesChange function that handles the change of the input
// on submit function which handlesSubmit of the form

export default AddCommentByArticleId;
