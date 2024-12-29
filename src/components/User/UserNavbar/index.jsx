import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { favoriteContext } from '../../../context/FavoritContext';
import { basketContext } from '../../../context/BasketContext';



function UserNavbar() {

  let { favorites } = useContext(favoriteContext)
  let { basket } = useContext(basketContext)


  return (
    <Navbar expand="lg" className="bg-body-tertiary " sticky='top'>
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/books" color="inherit">Books</Nav.Link>
            <Nav.Link href="/favorites" color="inherit">Favorites</Nav.Link>
            <span>{favorites.length}</span>
            <Nav.Link href="/basket" color="inherit">Basket</Nav.Link>
            <span>{basket.length}</span>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/basket">Basket</NavDropdown.Item>
              <NavDropdown.Item href="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar