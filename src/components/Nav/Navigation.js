import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AboutMe from '../Modal/AboutMe';
import PastProjects from '../Modal/PastProjects'

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>Kiel Sprague</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><AboutMe/></Nav.Link>
                <Nav.Link><PastProjects/></Nav.Link>
                <Nav.Link href="#link">Current Work & Learning</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
