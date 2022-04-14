import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap';
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-Store</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link><Link to="/" style={{"textDecoration":"none","color":"rgba(255,255,255,.55)"}}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/viewCart" style={{"textDecoration":"none","color":"rgba(255,255,255,.55)"}}>View Cart</Link></Nav.Link>
      <Nav.Link href="#pricing">Order</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
