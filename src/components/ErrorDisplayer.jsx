import React from "react";

const ErrorDisplayer = (props) => {
  const { err } = props;
  return (
    <article className="errMsg">
      <h3>{err ? err : "Path not found!"}</h3>
    </article>
  );
};

export default ErrorDisplayer;
