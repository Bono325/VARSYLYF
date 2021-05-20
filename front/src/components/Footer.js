import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='bg-dark' variant='dark'>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; VarsyLyf
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
