import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";
import ErrorDisplayer from "./components/ErrorDisplayer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    username: "tickle122",
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles/:topic_slug" />
          <SingleArticle username={username} path="article/:article_id" />
          <ArticleComments path="article/:article_id/comments" />
          <ErrorDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
