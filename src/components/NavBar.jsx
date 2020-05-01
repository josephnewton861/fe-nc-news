import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          {topics.map((topic) => {
            console.log(topic);
          })}
        </nav>
      </div>
    );
  }
}

export default NavBar;
