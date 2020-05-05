import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";
import ErrorDisplayer from "./components/ErrorDisplayer";

class App extends Component {
  state = {
    username: "tickle122",
  };
  render() {
    const { username } = this.state;
    return (
      <div>
        <Header username={username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles/:topic_slug" />
          <SingleArticle path="article/:article_id" />
          <ArticleComments path="article/:article_id/comments" />
          <ErrorDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
