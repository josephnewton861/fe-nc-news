import React, { Component } from "react";
import axios from "axios";
import CommentVoter from "./CommentVoter";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";
// import { Link } from "@reach/router";

class ArticleComments extends Component {
  state = {
    comments: [],
    // isLoading: true,
    err: "",
  };
  render() {
    const { err } = this.state;
    const { comments } = this.state;
    const { isLoading } = this.state;
    // console.log(comments);
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <div className="container">
        <div className="card">
          <section>
            {comments.map(
              ({ comment_id, article_id, author, votes, created_at, body }) => {
                return (
                  <section className="article" key={comment_id}>
                    <h3>Author: {author}</h3>
                    <h4>Body: {body}</h4>
                    <CommentVoter id={comment_id} votes={votes} />
                    <p> Date of publication: {created_at}</p>
                    <p>Article Id: {article_id}</p>
                    <p>Comment Id: {comment_id}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handlesDelete(comment_id)}
                    >
                      Delete comment
                    </button>
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
  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    axios
      .get(
        `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        // console.log(data.comments);
        return this.setState({ comments: data.comments });
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  handlesDelete = (comment_id) => {
    console.log("Deleted");

    let userPrompt = prompt(
      "Are you sure you want to delete this comment? Type yes if you do"
    );
    if (userPrompt === "yes")
      return axios
        .delete(
          `https://joseph-nc-news.herokuapp.com/api/comments/${comment_id}`
        )
        .then((res) => {
          this.setState((previousState) => {
            //   console.log(previousState);
            return {
              comments: previousState.comments.filter((comment) => {
                //   console.log(comment);
                //   console.log(comment_id);
                if (comment.comment_id !== comment_id) return true;
                else return false;
              }),
            };
          });
        })
        .catch((err) => {
          this.setState({ isLoading: false, err: err.response.data.msg });
        });
    else {
      return alert("Deleted comment aborted!");
    }
  };
}

export default ArticleComments;
