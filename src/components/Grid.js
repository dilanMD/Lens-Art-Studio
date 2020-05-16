import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

import CardImage from '../assets/images/card.svg'

const Grid = () => {
    return (
        <>
            <Container className="mt-4 mb-4">
                <Row className="mx-auto">
                    <Col xs={12} sm={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title>Wedding Photography</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Gallery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title>Birthday Photography</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Gallery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title>Puberty Photography</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Gallery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title>Corporate Photography</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Gallery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title>Tourism</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Gallery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Grid
