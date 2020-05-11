import React from "react";
import { FaNewspaper } from "react-icons/fa";

const Header = ({ username }) => {
  return (
    <div className="banner">
      <h1>
        <strong>
          <em>NC News</em> <FaNewspaper />
        </strong>
      </h1>

      <h4 className="login">Logged in as: {username}</h4>
    </div>
  );
};

export default Header;
