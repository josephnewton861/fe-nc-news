import React, { Component } from "react";
import axios from "axios";
// import { Link } from "@reach/router";
// import AddCommentByArticleId from "../components/AddCommentByArticleId";
import Voter from "../components/Voter";
// import * as utils from "../utils/utils";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";
import ArticleComments from "../components/ArticleComments";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
    showComments: false,
    changeNameOfButton: false,
    // author: "",
    // body: "",
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
                <Voter votes={votes} id={article_id} type="articles" />
                <p>Current comments: {comment_count}</p>
                <p> Date of publication: {created_at}</p>
                <p>Article Id: {article_id}</p>
                {this.state.changeNameOfButton === false ? (
                  <div>
                    <button
                      onClick={this.handlesReadComments}
                      className="readComments"
                    >
                      Read article comments
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={this.handlesReadComments}
                    className="readComments"
                  >
                    Hide article comments
                  </button>
                )}
                <section></section>
              </section>
            </div>
          </div>
        </div>
        {this.state.showComments ? (
          <div>
            <ArticleComments article_id={article_id} />
          </div>
        ) : null}
      </div>
    );
  }
  // if the show
  //render the article comments
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
  // addComment = (newComment) => {
  //   console.log(newComment);
  //   this.setState((currentState) => {
  //     return {
  //       article: [newComment, ...currentState.article],
  //     };
  //   });
  // };
  // handlesVotes = () => {
  //   console.log("clicked");
  // };

  handlesReadComments = () => {
    console.log("clicked");
    const doesShow = this.state.showComments;
    const changeName = this.state.changeNameOfButton;
    this.setState({ showComments: !doesShow, changeNameOfButton: !changeName });
  };
}

export default SingleArticle;
