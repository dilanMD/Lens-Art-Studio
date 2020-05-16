import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <Container style={{ backgroundColor: '#343a40' }} fluid>
                <Row>
                    <Col xl={3} className="mt-4 text-center">
                        <FaFacebook color="#FFF" size="50" />
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <FaInstagram color="#FFF" size="50" />
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <FaYoutube color="#FFF" size="50" />
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <FaWhatsapp color="#FFF" size="50" />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4 mb-2 text-center text-white">
                        <span>&copy; Lens Art Studio 2020</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
