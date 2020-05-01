import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";

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
        </Router>
      </div>
    );
  }
}

export default App;
