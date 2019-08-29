import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import northcoders from '../pictures/northcoders.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from '@reach/router'




class Navigation extends Component {
    render() {
        return (
            <Navbar
                className="navbar"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                fixed="top"
            >
                <Link to='/'>
                    <Navbar.Brand >
                        <img className="brandImg" src={northcoders} alt="northcoders logo." />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home   </Link>
                        <Link to="/articles"> Articles</Link>
                        <NavDropdown title="Topics" id="collasible-nav-dropdown">
                            <Link to="/articles/topic/coding" > Coding</Link>
                            <NavDropdown.Divider />

                            <Link to="/articles/topic/football">Football </Link>
                            <NavDropdown.Divider />

                            <Link to="/articles/topic/cooking">Cooking</Link>
                            <NavDropdown.Divider />
                            <Link to="/"> Show all topics

                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Nav className="user">
                        User Logged in: <br /> {this.props.userLoggedIn}
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default Navigation;