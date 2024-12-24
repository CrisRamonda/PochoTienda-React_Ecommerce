import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    PochoTienda
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/category/mobile'>Celulares</Nav.Link>
                    <Nav.Link as={Link} to='/category/audio'>Audio</Nav.Link>
                    <Nav.Link as={Link} to='/category/gaming'>Gaming</Nav.Link>
                    <Nav.Link as={Link} to='/category/tv'>Televisores</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar