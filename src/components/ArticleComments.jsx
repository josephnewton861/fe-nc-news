import React, { Component } from "react";
import axios from "axios";

class ArticleComments extends Component {
  state = {
    comments: [],
  };
  render() {
    const { comments } = this.state;
    // console.log(comments);
    return (
      <section>
        {comments.map(
          ({ comment_id, article_id, author, votes, created_at, body }) => {
            return (
              <section className="article">
                <h3 key={comment_id}>Author: {author}</h3>
                <h4>Body: {body}</h4>
                <h4>Current votes: {votes}</h4>
                <p> Body: {body}</p>
                <p> Date of publication: {created_at}</p>
                <p>Article Id: {article_id}</p>
                <p>Comment Id: {comment_id}</p>
              </section>
            );
          }
        )}
      </section>
    );
  }
  componentDidMount = () => {
    this.fetchCommentsByArticleId();
  };
  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    axios
      .get(
        `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        return this.setState({ comments: data.comments });
      });
  };
}

export default ArticleComments;
