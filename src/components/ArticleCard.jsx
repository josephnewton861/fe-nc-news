import React from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

const ArticleCard = ({
  created_at,
  title,
  votes,
  article_id,
  comment_count,
}) => {
  return (
    <section className="articleList">
      <Container>
        <Row>
          <Col xs={6} md={12}>
            <CardDeck>
              <Card style={{ width: "18rem" }} className="articleCard">
                <Card.Body>
                  <Card.Title>
                    <u>
                      <strong>Article title: {title}</strong>
                    </u>
                  </Card.Title>
                  <Card.Text>Date of publication: {created_at}</Card.Text>
                  <Card.Text>Current votes: {votes}</Card.Text>
                  <Card.Text>Comment count: {comment_count}</Card.Text>
                  <Link to={`/article/${article_id}`}>
                    <Button className="readMore" variant="dark">
                      Read more
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ArticleCard;
