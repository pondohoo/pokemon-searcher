import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function PokemonData(props) {
  return (
    <Container className={"mt-2"}>
      <Row xs={10}>
        <Card>
          <Card.Header>
            <h1>{props.name}</h1>
            <img src={props.sprite} alt={props.name} />
            <img src={props.shiny} alt={props.name} />
            <Row xs={2} className="mt-1">
              {props.types.map((index, key) => (
                <Col xs={2} className="border mx-1 border-dark text-center">{index.type.name}</Col>
              ))}
            </Row>
          </Card.Header>
          <Card.Body>
            <Row className="mt-3">
              <h5>Abilities</h5>
              {props.abilities.map((index, key) => (
                <div key={key}>
                  <span>{index.ability.name}</span>
                </div>
              ))}
            </Row>
            <Row className="mt-3">
              <h5>Stats</h5>
              {props.stats.map((index, key) => (
                <div key={key}>
                  <span>{index.stat.name}</span>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow={index.base_stat}
                      aria-valuemin="0"
                      aria-valuemax="255"
                      style={{ width: `${(index.base_stat / 255) * 100}%` }}
                    >
                      <span class="sr-only">{index.base_stat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
