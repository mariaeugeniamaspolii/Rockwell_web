import React from 'react';
import { Link } from 'react-router-dom';
import { NavRoutes } from '../../routes';
import "./NavBar.scss"

import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import Input from '../Input/Input';
import { rockwellLogo } from '../../assets/img';


const NavBar = () => {

  return (
    <header className='navBar'>
      <Navbar className=" bg-black py-3">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={rockwellLogo} height="32" className="logo-svg d-inline-block align-top" alt="Rockwell Records" />
            </Link>
          </Navbar.Brand>
          <Nav>
            {NavRoutes.map((nav, i) =>
              <Nav.Link className="text-gray" as={Link} key={i} to={nav.path}>{nav.name}</Nav.Link>
            )}
            <Form className="d-flex ms-4">
              <Input type="text" placeholder="Search.." icon={<Icon.Search />}></Input>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;