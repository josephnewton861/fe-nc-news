import React, { Component } from "react";
// import { Link } from "@reach/router";
// import AddCommentByArticleId from "../components/AddCommentByArticleId";
import Voter from "../components/Voter";
import * as api from "../utils/api";
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
  };
  render() {
    const { err } = this.state;
    const { isLoading } = this.state;
    const { username } = this.props;
    // console.log(this.props.username);
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
            <ArticleComments username={username} article_id={article_id} />
          </div>
        ) : null}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchSingleArticle();
  };
  fetchSingleArticle = async () => {
    try {
      const { article_id } = this.props;

      const article = await api.getSingleArticle(article_id);
      // const formattedArticle = utils.formatDate(data.article);
      this.setState({ article, isLoading: false });
    } catch (err) {
      console.dir(err.response.data.msg);
      this.setState({ isLoading: false, err: err.response.data.msg });
    }
  };

  handlesReadComments = () => {
    console.log("clicked");
    const doesShow = this.state.showComments;
    const changeName = this.state.changeNameOfButton;
    this.setState({ showComments: !doesShow, changeNameOfButton: !changeName });
  };
}

export default SingleArticle;
