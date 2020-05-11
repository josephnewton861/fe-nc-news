import React from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArticleCard = ({
  created_at,
  title,
  votes,
  article_id,
  comment_count,
}) => {
  return (
    <section className="articleCards">
      <Card style={{ width: "20rem" }} className="articleCard">
        <Card.Body>
          <Card.Title>
            <u>
              <strong>Article title: {title}</strong>
            </u>
          </Card.Title>
          <Card.Text>Current votes: {votes}</Card.Text>
          <Card.Text>Comment count: {comment_count}</Card.Text>
          <Card.Text>Date of publication: {created_at}</Card.Text>
          <Link to={`/article/${article_id}`}>
            <Button className="readMore" variant="dark">
              Read more
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ArticleCard;
