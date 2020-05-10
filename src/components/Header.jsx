import React from "react";

const Header = ({ username }) => {
  return (
    <div className="banner">
      <h1>
        <strong>
          <em>NC News</em>
        </strong>
      </h1>
      <h4 className="login">Logged in as: {username}</h4>
    </div>
  );
};

export default Header;
