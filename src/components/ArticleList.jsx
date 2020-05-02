import { Link } from "@reach/router";
import React, { Component } from "react";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    const { articles } = this.state;
    const { isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
    return (
      <main className="articles">
        {articles.map((article) => {
          return (
            <h3>
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
      })
      .then((response) => {
        const { articles } = response.data;
        this.setState({ articles: articles, isLoading: false });
      });
  };
}

export default ArticleList;
