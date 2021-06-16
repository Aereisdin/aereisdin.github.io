import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Kiel Sprague</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">About Me</Nav.Link>
                <Nav.Link href="#link">Portfolio of Projects</Nav.Link>
                <Nav.Link href="#link">Current Work & Learning</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
