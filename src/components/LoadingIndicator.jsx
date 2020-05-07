import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingIndicator = () => {
  return (
    <section className="loading">
      <Spinner animation="border" variant="success" />
      <p>Loading...</p>
    </section>
  );
};

export default LoadingIndicator;
