import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function PokemonSimple(props) {
  return (
    <Container className={"mt-2 p-3"}>
        <Card>
            <Card.Header>
            <h1 className={"text-center"}>{props.name}</h1>
            <img className={"w-100"} src={props.sprite} alt={props.name} />
            <Row xs={2} className="mt-1 w-100">
              {props.types.map((index, key) => (
                <Col xs={5} className="border mx-1 border-dark text-center">
                  {index.type.name}
                </Col>
              ))}
            </Row>
            </Card.Header>
        </Card>
    </Container>
  );
}
