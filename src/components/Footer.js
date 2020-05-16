import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <Container style={{ backgroundColor: '#343a40' }} fluid>
                <Row>
                    <Col xl={3} className="mt-4 text-center">
                        <a href="https://www.facebook.com" target="_blank">
                            <FaFacebook color="#FFF" size="50" />
                        </a>
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <a href="https://www.instagram.com" target="_blank">
                            <FaInstagram color="#FFF" size="50" />
                        </a>
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <a href="https://www.youtube.com" target="_blank">
                            <FaYoutube color="#FFF" size="50" />
                        </a>
                    </Col>
                    <Col xl={3} className="mt-4 text-center">
                        <a href="" target="_blank">
                            <FaWhatsapp color="#FFF" size="50" />
                        </a>
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
