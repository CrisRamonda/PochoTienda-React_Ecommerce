import { Nav, Navbar, Container, Image, NavDropdown, NavbarToggle, NavbarCollapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <Image className='mx-2' width="50" src='/assets/PochoLogo.svg' alt='PochoLogo' />
                    <div className='d-none d-md-inline'>PochoTienda</div>
                </Navbar.Brand>
                <NavbarToggle aria-controls="navbar-nav"/>
                <NavbarCollapse id="navbar-nav" className="justify-content-center">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/products/'>Productos</Nav.Link>
                        <NavDropdown variant='outlined' title='Categorias'>
                            <NavDropdown.Item as={Link} to='/category/mobile' className='custom-drop'>Celulares</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/audio' className='custom-drop'>Audio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/gaming' className='custom-drop'>Gaming</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/tv' className='custom-drop'>Televisores</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar