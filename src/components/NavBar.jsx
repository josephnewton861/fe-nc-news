import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

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
              <h3 className="" key={topic.slug}>
                <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
              </h3>
            );
          })}
        </nav>
      </div>
    );
  }
  componentDidMount = async () => {
    try {
      const topics = await api.fetchTopics();
      this.setState({ topics });
    } catch (err) {
      console.log(err);
    }
  };
}

export default NavBar;
