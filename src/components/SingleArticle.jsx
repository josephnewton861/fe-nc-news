import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import AddCommentByArticleId from "../components/AddCommentByArticleId";
import ArticleVoter from "../components/ArticleVoter";
// import * as utils from "../utils/utils";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
    author: "",
    body: "",
  };
  render() {
    const { err } = this.state;
    const { isLoading } = this.state;
    // console.log(isLoading);
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorDisplayer err={err} />;
    const {
      title,
      author,
      topic,
      body,
      votes,
      comment_count,
      created_at,
      article_id,
    } = this.state.article;
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="col-lg-12 col-lg-8">
            <div className="card-block">
              <section className="singleArticle">
                <h3 className="card-title">
                  <u>Article title: {title}</u>
                </h3>
                <h4>Author: {author}</h4>
                <h4>Choosen topic: {topic}</h4>
                <p> Body: {body}</p>
                <ArticleVoter votes={votes} id={article_id} />
                <p>Current comments: {comment_count}</p>
                <p> Date of publication: {created_at}</p>
                <p>Article Id: {article_id}</p>
                <button className="readComments">
                  <Link to={`/article/${article_id}/comments`}>
                    Read article comments
                  </Link>
                </button>
                <section>
                  <AddCommentByArticleId
                    // addComment={this.addComment}
                    article_id={article_id}
                  />
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchSingleArticle();
  };
  fetchSingleArticle = () => {
    const { article_id } = this.props;
    axios
      .get(`https://joseph-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        // const formattedArticle = utils.formatDate(data.article);
        this.setState({ article: data.article, isLoading: false });
      })
      .catch((err) => {
        console.dir(err.response.data.msg);
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };
  addComment = (newComment) => {
    console.log(newComment);
    this.setState((currentState) => {
      return {
        article: [newComment, ...currentState.article],
      };
    });
  };
  handlesVotes = () => {
    console.log("clicked");
  };
}

export default SingleArticle;
