import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";
// import * as api from "../utils/api";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

// import axios from "axios";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "votes",
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
        <h2 className="articlesTitle">
          Here are all the articles on our site click to view article in more
          depth:
        </h2>
        {articles.map((article) => {
          return <ArticleCard {...article} />;
        })}
        <hr></hr>
      </main>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };
  componentDidUpdate = (previousProps, previousState) => {
    if (
      previousProps.topic_slug !== this.props.topic_slug ||
      previousState.sort_by !== this.state.sort_by
    ) {
      this.fetchArticles();
    }
  };

  fetchArticles = () => {
    // api.getArticles(this.props.topic_slug).then((articles) => {
    //   this.setState({ articles, isLoading: false });
    // });
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
