import React from "react";
import "./MenuBar.scss";

import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiltersLinks } from "../../constants";
import Reveal from "../Reveal/Reveal";

const MenuBar = ({ title }) => {
    return (
        <Navbar>
            <Container>
                <Reveal delay={50}>
                    <h2 className="mb-0">{title}</h2>
                </Reveal>
                <Nav>
                    {FiltersLinks.map(({ id, title }, index) => (
                        <Reveal as="p" key={id} delay={150 + index * 70}>{title}</Reveal>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MenuBar;