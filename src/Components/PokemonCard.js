import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function PokemonCard({ name, image, onSeeAbilities }) {
  return (
    <Col xs={12} md={3}>
      <Card style={{ marginBottom: "15px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={onSeeAbilities}>Ver</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PokemonCard;
