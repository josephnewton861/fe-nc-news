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
    <div>
      <Card className="text-center">
        <Card.Header>Article</Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>{created_at}</Card.Text>
          <Card.Text>Current votes: {votes}</Card.Text>
          <Card.Text>Current comments: {comment_count}</Card.Text>
          <Link to={`/article/${article_id}`}>
            <Button variant="primary">Read more about this article</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
