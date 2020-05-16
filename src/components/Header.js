import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">Lens Art Studio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/videos">Videos</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header
