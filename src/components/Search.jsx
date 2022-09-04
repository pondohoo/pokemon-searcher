import React from 'react';
import { useState } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

export default function Search(props) {
    const [search, setSearch] = useState('')

    return (
        <Container>
            <Form className="mt-2">
                <Row className="my-1">
                    <Col sm={10} xs={9} className="my-1">
                        <Form.Control
                            onChange={(event) => setSearch(event.target.value )}
                            placeholder="Search"
                        />
                        
                    </Col>
                    <Col sm ={2} xs={2} className="my-1">
                        <Button block onClick={event=> props.getPokemon(search)}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}