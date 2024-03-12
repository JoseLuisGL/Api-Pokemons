import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function PokemonCard({ name, image, onSeeAbilities }) {
  return (
    <Col xs={12} md={3}>
      <Card className="pokemon-card">
        <Card.Img variant="top" src={image} className="pokemon-image" />
        <Card.Body>
          <Card.Title className="pokemon-name">{name}</Card.Title>
          <Button variant="primary" onClick={onSeeAbilities} className="ver-button">Ver</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PokemonCard;
