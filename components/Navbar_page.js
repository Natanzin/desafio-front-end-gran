import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Navbar_page = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="/">Desafio FrontEnd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/alertas">Alertas</Nav.Link>
            <Nav.Link href="/botoes">Botoes</Nav.Link>
            <Nav.Link href="/endereco">Endereço</Nav.Link>
            <Nav.Link href="/contador">Contador</Nav.Link>
            <Nav.Link href="/disney">Disney</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_page