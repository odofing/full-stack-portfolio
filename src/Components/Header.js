import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand className='text-success'>OdofinG</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='nav text-capitalize'>
                <LinkContainer to='/'>
                  <Nav.Link>
                    <i className='fas fa-home'></i> home
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/about'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> About
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/project'>
                  <Nav.Link>
                    <i className='fas fa-project-diagram'></i> project
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link>
                    <i className='far fa-address-card'></i> contact
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
