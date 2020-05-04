import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import AddCommentByArticleId from "../components/AddCommentByArticleId";
// import * as utils from "../utils/utils";
// import LoadingIndicator from "../components/LoadingIndicator";

class SingleArticle extends Component {
  state = {
    article: {},
    // isLoading: true,
  };
  render() {
    // console.log(isLoading);
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
    // if (isLoading) return <LoadingIndicator />;
    return (
      <section className="article">
        <h3>Article title: {title}</h3>
        <h4>Author: {author}</h4>
        <h4>Choosen topic: {topic}</h4>
        <p> Body: {body}</p>
        <p>Current votes: {votes}</p>
        <p>Current comments: {comment_count}</p>
        <p> Date of publication: {created_at}</p>
        <p>Article Id: {article_id}</p>
        <button className="commentViewer">
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
}

export default SingleArticle;
