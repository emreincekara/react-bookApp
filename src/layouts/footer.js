import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className='py-4 border-top'>
            <Container>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <Col md='4' className='d-flex align-items-center'>
                        <span className='text-muted'>© {new Date().getFullYear()} Emre İncekara</span>
                    </Col>
                    <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                        <li className='ms-3'>
                            <a href="https://www.linkedin.com/in/emreincekara/" className="btn-social btn-linkedin">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a href="https://www.github.com/emreincekara/" className="btn-social btn-github">
                                <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer