import React, { Component } from 'react'
import Navbar2 from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default class Navvis extends Component {
    render() {
        return (
            <div>
                <Navbar2 collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar2.Brand href="#home">SmartHouse</Navbar2.Brand>
            <Navbar2.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar2.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#gui">GUI</Nav.Link>
                <Nav.Link href="#instructions">Instructions</Nav.Link>
               
                </Nav>
            <Nav>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link eventKey={2} href="#settings">Settings</Nav.Link>
                </Nav>
            </Navbar2.Collapse>
            </Navbar2>
            </div>
        )
    }
}
