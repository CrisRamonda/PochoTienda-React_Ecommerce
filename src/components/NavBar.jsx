import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <Image className='mx-2' width="50" src='https://img.icons8.com/keek/100/shopping-cart-loaded.png' alt='PochoLogo' />
                    PochoTienda
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/category/mobile'>Celulares</Nav.Link>
                    <Nav.Link as={Link} to='/category/audio'>Audio</Nav.Link>
                    <Nav.Link as={Link} to='/category/gaming'>Gaming</Nav.Link>
                    <Nav.Link as={Link} to='/category/tv'>Televisores</Nav.Link>
                </Nav>
                <CartWidget></CartWidget>
            </Container>
        </Navbar>
    )
}

export default NavBar