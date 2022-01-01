import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Menubar.css'
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <Navbar className="menu" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} width="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="a" to="/home">Home</Link>
                            <Link className="a" to="/rider">Rider</Link>
                            <Link className="a" to="/learner">Learner</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Menubar;