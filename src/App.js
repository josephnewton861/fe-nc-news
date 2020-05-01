import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

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
      </div>
    );
  }
}

export default App;
