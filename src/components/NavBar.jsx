import { Nav, Navbar, Container, Image, NavDropdown, NavbarToggle } from 'react-bootstrap'
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
                    <Nav.Link as={Link} to='/products/'>Productos</Nav.Link>
                    <NavDropdown variant='outlined' title='Categorias'>
                        <NavDropdown.Item as={Link} to='/category/mobile' className='custom-drop'>Celulares</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/category/audio' className='custom-drop'>Audio</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/category/gaming' className='custom-drop'>Gaming</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/category/tv' className='custom-drop'>Televisores</NavDropdown.Item>
                    </NavDropdown>
                    <NavbarToggle></NavbarToggle>
                </Nav>
                <CartWidget></CartWidget>
            </Container>
        </Navbar>
    )
}

export default NavBar