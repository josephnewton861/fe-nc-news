import React, { Component } from "react";
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
      <div>
        <section className="image">
          <img
            src="https://polandbylocals.com/wp-content/uploads/2018/03/wood-3157395_1920-1-e1520934679774.jpg"
            alt="img"
            height="500"
            width="100%"
          />
        </section>
        <div className="container">
          <h3 className="articleHeader">Your chosen article:</h3>
          <div className="jumbotron">
            <section className="singleArticle">
              <h3 className="card-title">
                <strong>
                  <u>Article title: {title}</u>
                </strong>
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
                    className="readComments btn btn-dark"
                  >
                    Read article comments
                  </button>
                </div>
              ) : (
                <button
                  onClick={this.handlesReadComments}
                  className="readComments btn btn-dark"
                >
                  Hide article comments
                </button>
              )}
              <section></section>
            </section>
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
      this.setState({ article, isLoading: false });
    } catch (err) {
      console.dir(err.response.data.msg);
      this.setState({ isLoading: false, err: err.response.data.msg });
    }
  };

  handlesReadComments = () => {
    const doesShow = this.state.showComments;
    const changeName = this.state.changeNameOfButton;
    this.setState({ showComments: !doesShow, changeNameOfButton: !changeName });
  };
}

export default SingleArticle;
