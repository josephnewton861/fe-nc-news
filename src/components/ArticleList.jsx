import { Link } from "@reach/router";
import React, { Component } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: "",
  };
  render() {
    const { articles } = this.state;
    const { isLoading } = this.state;
    const { err } = this.state;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main className="articlesContainer">
        {articles.map((article) => {
          return (
            <h3 className="articlesList" key={article.article_id}>
              <Link
                to={`/article/${article.article_id}`}
                key={article.article_id}
              >
                {article.title}
              </Link>
            </h3>
          );
        })}
        <hr></hr>
      </main>
    );
  }
  componentDidMount = () => {
    const params = {
      topic: this.props.topic_slug,
      sort_by: this.state.sort_by,
    };
    this.fetchArticles(params);
  };
  componentDidUpdate = (previousProps, previousState) => {
    if (
      previousProps.topic_slug !== this.props.topic_slug ||
      previousState.sort_by !== this.state.sort_by
    ) {
      return this.fetchArticles();
    }
  };

  fetchArticles = () => {
    axios
      .get("https://joseph-nc-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic_slug, sort_by: this.state.sort_by },
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
