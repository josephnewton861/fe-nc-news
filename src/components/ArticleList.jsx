import { Link } from "@reach/router";
import React, { Component } from "react";
import axios from "axios";

class ArticleList extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <main className="articles">
        {articles.map((article) => {
          return (
            <h3>
              <Link to="/articles" key={article.article_id}>
                {article.title}
              </Link>
            </h3>
          );
        })}
      </main>
    );
  }
  componentDidMount = () => {
    axios
      .get("https://joseph-nc-news.herokuapp.com/api/articles")
      .then((response) => {
        const { articles } = response.data;
        this.setState({ articles: articles });
      });
  };
}

export default ArticleList;
