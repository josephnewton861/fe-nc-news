import React from "react";

const Header = ({ username }) => {
  return (
    <header className="header">
      <h1>NC_News</h1> <h2 className="login">Logged in as: {username}</h2>
    </header>
  );
};

export default Header;
