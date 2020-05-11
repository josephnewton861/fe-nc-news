import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplayer from "../components/ErrorDisplayer";
import * as api from "../utils/api";
import ArticleCard from "../components/ArticleCard";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import CardDeck from "react-bootstrap/CardDeck";

// import axios from "axios";

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
      <div>
        <section className="image">
          <img
            src="https://www.seoclerk.com/pics/528066-1yhKU01492828815.jpg"
            alt="img"
            height="500"
            width="100%"
          />
        </section>
        <main className="articlesContainer">
          <h3 className="articlesTitle">
            <u>
              Here are all the articles on our site. Click to an view article in
              more depth:
            </u>
          </h3>
          <div className="articleList">
            {articles.map((article) => {
              return <ArticleCard {...article} key={article.article_id} />;
            })}
          </div>
        </main>
      </div>
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

  fetchArticles = async () => {
    try {
      const { topic_slug } = this.props;
      const { sort_by } = this.state;

      const articles = await api.getArticles(topic_slug, sort_by);
      this.setState({ articles, sort_by, isLoading: false });
    } catch (err) {
      this.setState({ err: err.response.err.msg });
    }
  };
}

export default ArticleList;
