import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavigationsBar = ({ children }) => {
    return (
        <>
            <Container className='p-4'>
                <div className='blur-container add-item-shadow '>
                    <Navbar  bg="none" expand="lg" className='m-0 p-0'>
                        <Navbar.Brand className='m-0 fw-bold' href="#home">Mechanical Info</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Container className='w-100'>
                            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                                <Nav className="d-flex gap-3">
                                    <Link to="/" className='m-0 text-dark text-decoration-none fw-bold'>Home</Link>
                                    <Link to="/ContentsPage" className='m-0 text-dark text-decoration-none  fw-bold'>Artikel</Link>
                                    {/* <Link to="#" className='m-0 text-dark text-decoration-none  fw-bold'>Riwayat</Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Container>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default NavigationsBar