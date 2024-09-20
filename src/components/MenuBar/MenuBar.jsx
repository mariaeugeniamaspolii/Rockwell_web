import React from "react";
import "./MenuBar.scss";

import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiltersLinks } from "../../constants";

const MenuBar = ({ title }) => {
    return (
        <Navbar>
            <Container>
                <h2 className="mb-0">{title}</h2>
                <Nav>
                    {FiltersLinks.map(({ id, title }) => (
                        <p key={id}>{title}</p>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MenuBar;