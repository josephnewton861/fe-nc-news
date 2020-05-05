import { Link } from "@reach/router";
import React, { Component } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "votes",
    err: "",
  };
  render() {
    const { articles } = this.state;
    const { isLoading } = this.state;
    const { err } = this.state;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main className="articles">
        {articles.map((article) => {
          return (
            <h3 key={article.article_id}>
              <Link
                to={`/article/${article.article_id}`}
                key={article.article_id}
              >
                {article.title}
              </Link>
            </h3>
          );
        })}
      </main>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };
  componentDidUpdate = (previousProps, previousState) => {
    if (previousProps.topic_slug !== this.props.topic_slug) {
      return this.fetchArticles();
    }
  };

  fetchArticles = () => {
    axios
      .get("https://joseph-nc-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic_slug },
        sort: this.state.sort,
        order: "desc",
      })
      .then((response) => {
        const { articles } = response.data;
        this.setState({ articles: articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.err.msg });
      });
  };
}

export default ArticleList;
