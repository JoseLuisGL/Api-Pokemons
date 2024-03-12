import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PokemonStatsCard = ({ abilities }) => {
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Header>Estadísticas</Card.Header>
      <ListGroup variant="flush">
        {abilities.map((ability, index) => (
          <ListGroup.Item key={index}>{ability}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default PokemonStatsCard;
