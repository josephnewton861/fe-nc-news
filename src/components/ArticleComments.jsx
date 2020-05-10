import React, { Component } from "react";
// import axios from "axios";
import Voter from "./Voter";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";
import AddCommentByArticleId from "./AddCommentByArticleId";
import * as api from "../utils/api";
// import { Link } from "@reach/router";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { err } = this.state;
    const { comments } = this.state;
    const { isLoading } = this.state;
    const { username } = this.props;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <div className="container">
        <AddCommentByArticleId
          username={username}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <div className="card">
          <section className="comments">
            {comments.map(
              ({ comment_id, article_id, author, votes, created_at, body }) => {
                return (
                  <section className="article" key={comment_id}>
                    <h3>
                      <u>
                        <strong>Author: {author}</strong>
                      </u>
                    </h3>
                    <h4>Body: {body}</h4>
                    <Voter id={comment_id} votes={votes} type="comments" />
                    <p> Date of publication: {created_at}</p>
                    <p>Article Id: {article_id}</p>
                    <p>Comment Id: {comment_id}</p>
                    {author === this.props.username ? (
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handlesDelete(comment_id)}
                        >
                          Delete comment
                        </button>
                      </div>
                    ) : (
                      <button disabled={true} className="btn btn-danger">
                        Delete comment
                      </button>
                    )}
                    <hr className="break"></hr>
                  </section>
                );
              }
            )}
          </section>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchCommentsByArticleId();
  };
  fetchCommentsByArticleId = async () => {
    try {
      const { article_id } = this.props;
      const comments = await api.getCommentsByArticleId(article_id);
      return this.setState({ comments, isLoading: false });
    } catch (err) {
      console.dir(err);
      this.setState({ err: err.response.err.msg });
    }
  };

  handlesDelete = async (comment_id) => {
    try {
      let userPrompt = prompt(
        "Are you sure you want to delete this comment? Type yes if you do"
      );
      if (userPrompt === "yes") await api.removeCommentsByCommentId(comment_id);

      this.setState((previousState) => {
        return {
          comments: previousState.comments.filter((comment) => {
            if (comment.comment_id !== comment_id) return true;
            else return false;
          }),
        };
      });
    } catch (err) {
      this.setState({ isLoading: false, err: err.response.data.msg });
    }
  };

  addComment = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };
}

export default ArticleComments;
