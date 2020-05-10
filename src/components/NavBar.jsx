import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class NavBar extends Component {
  state = {
    topics: [],
    err: "",
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          {topics.map((topic) => {
            return (
              <ul key={topic.slug}>
                <li>
                  <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
                </li>
              </ul>
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
      this.setState({ err: err.response.err.msg });
    }
  };
}

export default NavBar;
