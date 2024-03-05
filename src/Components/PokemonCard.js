import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import defaultImage from "../default.png";

function PokemonCard({ name, brief, image }) {
  return (
    <Col xs={12} md={3}>
      <Card style={{ marginBottom: "15px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{brief}</Card.Text>
          <Button variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PokemonCard;

