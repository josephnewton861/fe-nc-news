import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class NavBar extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <nav className="nav">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          {topics.map((topic) => {
            return (
              <h3>
                <Link to="/topics">{topic.slug}</Link>
              </h3>
            );
          })}
        </nav>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
  };

  //   componentDidUpdate = () => {};

  fetchTopics = () => {
    axios
      .get("https://joseph-nc-news.herokuapp.com/api/topics")
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      });
  };
}

export default NavBar;
